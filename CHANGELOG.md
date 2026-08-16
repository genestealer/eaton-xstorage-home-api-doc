# Changelog

All notable changes to this project are documented here.

This project does not follow a version numbering scheme — entries are grouped by date of change.
Dates reflect when the work was done, not necessarily when it was committed.
Ad
---

## 2026-08-16

### Added

- **"Observed API Behaviour Notes" section**, sourced from live-probing findings in [home_assistant_eaton_battery_storage_improved](https://github.com/genestealer/home_assistant_eaton_battery_storage_improved/blob/develop/docs/device-api-behaviour.md):
  - Write endpoints (`/api/device/power`, `/api/device/command`, `/api/settings`) answer with three different response shapes; `PUT /api/settings` (no trailing slash) 307-redirects to the trailing-slash path.
  - Rejected requests: `404` plain text for bad/wrong-method endpoints vs. `400` JSON error body (`{"error": {"step", "errCode"}}`) for a refused command.
  - `PUT /api/settings` always stores a new record — `id`/`createdAt`/`updatedAt` change on every write even when values are unchanged.
  - `createdAt`/`updatedAt` are seconds on `GET /api/device`, `GET /api/settings` and diagnostics, but milliseconds on `status.currentMode`, command responses and notifications; `startTime`/`endTime` are `HHMM` integers that can wrap past midnight.
  - `technical_status.inverterPowerRating` can read `0`; power-percentage-to-watt conversions should fall back to `inverterVaRating` then a hardcoded default.
  - `status.today` / `status.last30daysEnergyFlow` are watt-hours (undocumented unit), confirmed against a live grid-consumption reading — distinct from `/api/metrics`, which is watts.
  - `bmsTotalCharge` / `bmsTotalDischarge` are ampere-hours, not kWh, confirmed via pack voltage and expected cycle count.
  - Documented enum values seen live but missing from the API docs: `gridRole: PRODUCER`, `nonCriticalLoadRole: CONSUMER`, `operationMode: BASIC`, `currentMode.recurrence: DEFAULT_EVENT`, `currentMode.type: DEFAULT`.
  - Which zero readings in `/api/technical/status` are suppressed placeholders (temperatures, `bmsVoltage`, BMS totals) vs. genuine (`gridFrequency`, which reads `0` during a real outage).
  - `POST /api/device/command` response example added showing the stored mode record returned on success.

---

## 2026-08-12

### Fixed

- **`/api/metrics/` unit corrected**: values are instantaneous **Watts (W)**, not Wh. Confirmed by a user report — summing 250 raw samples (averaging 574.75) yielded 143.7 kWh against an actual ~13.7 kWh day, a ~10.5x discrepancy consistent with treating power samples as energy.
- **`gridRole` enum corrected**: live devices report `"PRODUCER"`/`"CONSUMER"`, not `"SUPPLYING"`/`"CONSUMING"` as previously documented.

---

## 2026-08-11

Work completed in this session; not yet committed.

### Added

- **BMS Fault Codes (`bmsFaultCode`) reference table** — all 8 possible values with descriptions, sourced from the device web UI translation bundle (`MAINTENANCE_BMSFAULTCODE_*`). Corrected the type from a single value to an **array** (confirmed by reading the maintenance chunk `6491.769be33d.chunk.js`).
- **Role access matrix** — live-tested 30 read-only endpoints with both customer and technician tokens. Confirmed 4 tech-only endpoints (`/technical/status`, `/technical/tunnel`, `/device/maintenance/diagnostics`, `/device/maintenance/date-time`). Security note: `/technical/https_tunnel` returns 200 to customers while its SSH sibling `/technical/tunnel` returns 403.
- **Alert lifecycle and fault detection guide** — documents the CRITICAL/INFO raise-resolve pair model, the algorithm for detecting active faults without technician credentials, and the correlation between customer-visible `subType` values and technician-visible `bmsFaultCode` values. Includes a live example: `BATTERY_VOLTAGE_HIGH` (customer) ↔ `OVER_VOLTAGE` (tech).
- **Notification `subType` reference** — all 51 alert types from the translation bundle, grouped into Battery, Inverter, Grid/AC, PV/DC, and Firmware categories, each with title and action guidance.
- **Metrics endpoints corrected and completed**:
  - Fixed the `/api/metrics/` response shape (8 fields per record, wrapped in standard envelope; `from`/`to` params are required).
  - Added `/api/metrics/weekly`.
  - Added the CSV export endpoints (`/api/metrics/export`, `/api/metrics/export/{frequency}`) with all valid `field` values.
- **Clarified `/api/notifications/unread` is not a fault indicator** — active alerts can have `"status": "READ"` and still report `total: 0`.
- **Website mirror** — `website_dump/site/` contains a full 105-file, 7.5 MB static mirror of the device web interface (all JS bundles, CSS, fonts, media, `index.html`, `manifest.json`, `asset-manifest.json`). Source maps are not deployed by the firmware.
- **`static-js/` folder identified as a redundant duplicate** of `website_dump/site/static/js/` (all 60 files hash-identical); safe to delete.

### Fixed

- `POST /api/notifications/read/all` comment updated: does not resolve or clear faults.
- `/api/config/state` documented as accepting PATCH as well as GET (confirmed via bundle analysis).
- `/api/schedule/` corrected to include PUT, and the child endpoints `POST /schedule/event` and `DELETE /schedule/event/{eventId}` added.

---

## 2026-01-19 — 9ceefc7

### Added

- GitHub FUNDING.yml / sponsorship metadata.

---

## 2025-11-14 — 81bbc9c

### Fixed

- Improved comment on power state API behavior: clarified that `POST /api/device/power` returns no response body and that callers should verify device state afterwards via `GET /api/device` or `GET /api/device/status`.

---

## 2025-08-13 — fb1c253, 36bb9ab, 5685359, de7ff72

### Added

- Full documentation for `PUT /api/settings/` including the critical GET→PUT data transformation requirements (extracting `geonameId` from country/city objects, `id` from timezone objects).
- Detailed explanation of all three key settings: `bmsBackupLevel`, `defaultMode`, and `energySavingMode`.
- Real-world `PUT /api/settings/` example with Frequency Regulation mode and complete payload.
- Operation Modes Reference section expanded with mode compatibility table and real-world AC-coupled single-meter note.
- Data export instructions and cloud shutdown warning.

### Fixed

- Clarified that `energySavingMode.enabled` is a boolean (not a string).
- Added `duration` parameter to all `POST /api/device/command` examples.

---

## 2025-07-29 — 75cb57b, 2951432, 7d08caf

### Added

- Cloud service shutdown notice (September 1 2025 deadline) and data export procedure.
- Screenshots of the web interface (Dashboard 1–5).
- Archive folder (web page snapshots, firmware files).
- Operation modes reference based on official Eaton manual (MN700004EN).

---

## 2025-07-28 — 61538c9, b53d643, 6a2fd65, d71e93b

### Added

- `GET /api/notifications/` endpoint with query parameters, paginated response, and severity/subType description.
- `GET /api/notifications/unread` endpoint.
- `POST /api/notifications/read/all` endpoint.
- `POST /api/device/power` endpoint with on/off request body.

---

## 2025-07-22 — 93d21fd

### Fixed

- Added `duration` field to `POST /api/device/command` JSON examples.

---

## 2025-07-21 — 23a4178

### Added

- Detailed response structures for all main endpoints.
- Authentication notes (token expiry ~60 minutes, 403 for customer on tech endpoints).

---

## 2025-07-15 — cfe1b3a, 6f748c0, 1728646, c11d95d, 0f2ab5f, 7a2f373

### Added

- Initial commit: project structure, MIT licence, and basic API documentation.
- Firmware version note (`00.01.0017-0-g72006700`) and HTTPS access guidance.
- Authentication credentials and Bearer token usage for both Customer and Technician accounts.
- Documented endpoints: `/api/auth/signin`, `/api/config/state`, `/api/device`, `/api/device/status`, `/api/settings`, `/api/metrics`, `/api/metrics/daily`, `/api/device/command`, `/api/technical/status`, `/api/device/maintenance/diagnostics`.
- Technical system information: BMS parameters, installation types, operation mode priority hierarchy, battery backup level, energy flow terminology.
- Summary table and quick-reference tables.
