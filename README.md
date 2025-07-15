# eaton-xstorage-home-api
Eaton xStorage Home API Document (Unofficial)

# xStorage Home API Documentation

This repository documents discovered API endpoints from an Eaton xStorage Home system. The endpoints were reverse-engineered using Chrome network monitoring and verified via Postman.

> ⚠️ This project is **not affiliated with or endorsed by Eaton**. Use at your own risk.

---

## Summary Table

| Endpoint                          | Method | Requires Technician Account | Description                       |
|-----------------------------------|--------|-----------------------------|-----------------------------------|
| `/api/config/state`               | GET    | No                          | Retrieves the current configuration state of the system. |
| `/api/device`                     | GET    | No                          | Retrieves device information.     |
| `/api/device/status`              | GET    | No                          | Retrieves the current status of the device. |
| `/api/settings`                   | GET    | No                          | Retrieves device settings.        |
| `/api/metrics`                    | GET    | No                          | Retrieves hourly metrics data.    |
| `/api/metrics/daily`              | GET    | No                          | Retrieves daily metrics data.     |
| `/api/schedule/`                  | GET    | No                          | Retrieves schedule information.   |
| `/api/technical/status`           | GET    | Yes                         | Retrieves technical status of the device. |
| `/api/device/maintenance/diagnostics` | GET | Yes                         | Retrieves maintenance diagnostics. |
| `/api/device/command`             | POST   | No                          | Sends commands to the device.     |
| `/api/auth/signin`                | POST   | No                          | Authenticates a user and retrieves a token. |

---

## API Endpoints

### General Endpoints

#### `GET /api/config/state`
- **Description**: Retrieves the current configuration state of the system.
- **Response**:
  ```json
  {
    "setupComplete": true,
    "missingSteps": [],
    "version": "00.01.0017-0-g72006700",
    "onboardState": "not_onboarded",
    "connected": false
  }
  ```
- **Comment**: Not much useful information.

#### `GET /api/device`
- **Description**: Retrieves device information.
- **Response**:
  ```json
  {
    "id": "",
    "name": "REDACTED",
    "country": { "name": "United Kingdom" },
    "city": { "name": "London" },
    "firmwareVersion": "00.01.0017-0-g72006700",
    "inverterManufacturer": "EATON",
    "inverterModelName": "XSTH1P036P048V01",
    "bmsCapacity": 4.2,
    "dns": "8.8.8.8"
  }
  ```
- **Comment**: Lots of good information.

#### `GET /api/device/status`
- **Description**: Retrieves the current status of the device.
- **Response**:
  ```json
  {
    "currentMode": { "command": "SET_CHARGE", "parameters": { "action": "ACTION_CHARGE", "power": 15, "soc": 90 } },
    "energyFlow": { "batteryStatus": "BAT_CHARGING", "stateOfCharge": 88 },
    "operationMode": "CHARGING"
  }
  ```
- **Comment**: Lots of good information.

#### `GET /api/settings`
- **Description**: Retrieves device settings.
- **Response**:
  ```json
  {
    "name": "REDACTED",
    "country": { "name": "United Kingdom" },
    "city": { "name": "London" },
    "firmwareVersion": "00.01.0017-0-g72006700",
    "bmsCapacity": 4.2,
    "dns": "8.8.8.8"
  }
  ```
- **Comment**: Lots of good information.

---

### Metrics Endpoints

#### `GET /api/metrics`
- **Description**: Retrieves hourly metrics data.
- **Response**:
  ```json
  {
    "metrics": [
      { "batteryStateOfCharge": 6, "time": 1752534000000 },
      { "batteryStateOfCharge": 7, "time": 1752534300000 }
    ],
    "total": { "batteryStateOfCharge": 52 }
  }
  ```
- **Comment**: Day metrics (shows data by the hour).

#### `GET /api/metrics/daily`
- **Description**: Retrieves daily metrics data.
- **Response**:
  ```json
  {
    "metrics": [
      { "batteryStateOfCharge": 64, "time": 1752447600000 }
    ],
    "total": { "batteryStateOfCharge": 64 }
  }
  ```
- **Comment**: Week metrics (shows data by the day).

---

### Command Endpoints

#### `POST /api/device/command`
- **Commands**:
  - **SET_CHARGE**: Sets the device to charge mode.
    ```json
    { "command": "SET_CHARGE", "parameters": { "power": 10, "soc": 90, "action": "ACTION_CHARGE" } }
    ```
    - **Power**: Integer value between 5–100%.
    - **SOC**: Target State of Charge (0–100%) in 1% steps; UI only allows steps of 5%.

  - **SET_BASIC_MODE**: Sets the device to idle/default mode.
    ```json
    { "command": "SET_BASIC_MODE", "parameters": null }
    ```

  - **SET_DISCHARGE**: Sets the device to discharge mode.
    ```json
    { "command": "SET_CHARGE", "parameters": { "power": 5, "soc": 10, "action": "ACTION_DISCHARGE" } }
    ```
    - **Power**: Integer value between 5–100%.
    - **SOC**: Target State of Charge (0–100%) in 1% steps; UI only allows steps of 5%.

  - **SET_MAXIMIZE_AUTO_CONSUMPTION**: Maximizes auto consumption.
    ```json
    { "command": "SET_MAXIMIZE_AUTO_CONSUMPTION", "parameters": null }
    ```

  - **SET_VARIABLE_GRID_INJECTION**: Sets variable grid injection.
    ```json
    { "command": "SET_VARIABLE_GRID_INJECTION", "parameters": { "maximumPower": 0 } }
    ```

  - **SET_FREQUENCY_REGULATION**: Sets frequency regulation.
    ```json
    { "command": "SET_FREQUENCY_REGULATION", "parameters": { "powerAllocation": 0, "optimalSoc": 0 } }
    ```

  - **SET_PEAK_SHAVING**: Sets peak shaving.
    ```json
    { "command": "SET_PEAK_SHAVING", "parameters": { "maxHousePeakConsumption": 0 } }
    ```

---

### Authentication Endpoints

#### `POST /api/auth/signin`
- **Description**: Authenticates a user and retrieves a token.
- **Request**:
  ```json
  { "username": "admin", "pwd": "password", "userType": "tech" }
  ```
- **Response**:
  ```json
  { "": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." }
  ```

---

## Notes
- All endpoints require proper authentication via Bearer tokens.
- Bearer tokens seem to expire after 60 minutes.
- Some endpoints are restricted to technician profiles and will return a `403 Forbidden` error for customer profiles.
