
# Solax2HA

Solax2HA is a service that integrates Solax inverters with Home Assistant by creating sensors through the Home Assistant API. The service is built and run on a separate machine and uses cron to run periodically.

## Features

- **Real-time Monitoring**: Fetch data from your Solax inverter every 10 seconds.
- **Easy Integration**: Create sensors in Home Assistant via the API.
- **Automatic Execution**: Use cron for automatic periodic execution.

## Requirements

- A machine with network access to HA and Solax inverter
- Solax Inverter
- Home Assistant
- Node.js and npm (for building the service)

## Installation

### 1. Clone the repository:
```bash
git clone git@github.com:RobinCK/solax2ha.git
cd solax2ha
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Build the project:
```bash
npm run build
```

### 4. Create a `.env` file:
Create a `.env` file in the root directory with the following content:
```env
SOLAX_URL=http://192.168.100.2
SOLAX_PASSWORD=password
HA_URL=https://192.168.100.3:8123
HA_TOKEN=eyJ
HA_SENSOR_BASE_NAME=solax
HA_SENSOR_BASE_UNIQUE_ID=solax_id
HA_DEVICE_NAME=Solax G2 Inverter
HA_DEVICE_IDENTIFIER=Solax G2 Inverter
HA_DEVICE_MANUFACTURER=Solax
HA_DEVICE_MODEL=G2 3-Phase
```

### 5. Run the service:
```bash
node ./dist/index.js
```

### 6. Set up periodic execution:
Create a bash script to run the service:
```bash
#!/bin/bash
cd /path/to/solax2ha
node ./dist/index.js
```

#### Using cron:
Open crontab for editing:
```bash
crontab -e
```

Add the following line to run the service every 1 minute:
```bash
* * * * * /path/to/bash /path/to/your/script.sh
```

#### Using systemd:
If you need to transmit more often than 1 minute, you can create your own service

##### Step 1: Create a systemd Service File
Create a service file for your script, for example, `/etc/systemd/system/solax.service`, and add the following content:
```ini
[Unit]
Description=Run Solax solax2ha

[Service]
ExecStart=/path/to/bash /path/to/your/script.sh
```

##### Step 2: Create a systemd Timer File
Create a timer file to run the service every 10 seconds, for example, `/etc/systemd/system/solax.timer`, and add the following content:
```ini
[Unit]
Description=Run Solax script every 10 seconds

[Timer]
OnBootSec=10sec
OnUnitActiveSec=10sec
Unit=solax.service

[Install]
WantedBy=timers.target
```

##### Step 3: Start and Enable the Timer
Run the following commands to start the timer and set it to start automatically at boot:
```sh
sudo systemctl daemon-reload
sudo systemctl start solax.timer
sudo systemctl enable solax.timer
```

##### Step 4: Check the Status of the Timer
To verify that the timer is working, run:
```sh
sudo systemctl status solax.timer
```

## Usage

After installation and configuration, the service will automatically create sensors in Home Assistant, allowing you to monitor your Solax inverter in real-time.

## Contributing

We welcome contributions to Solax2HA! If you have any ideas or want to make changes, please fork the repository and submit a pull request. Ensure your code adheres to the existing style and includes tests where applicable.

## Other Home Assistant projects

- [Blackout](https://github.com/RobinCK/blackout) — integration for planned and emergency power outages in Ukraine: schedules for 21 regions, the Ukrenergo grid state, outage history and dashboard cards.
- [Sirio Pump Inverter (WiNET)](https://github.com/RobinCK/ha-sirio-winet) — local integration for Italtecnica Sirio pump inverters with the WiNET Wi-Fi module, with a pressure gauge card.
- [Klimo](https://github.com/RobinCK/klimo) — add-on for room-by-room heating and cooling: heat pumps, boilers, air conditioners, heaters and circulation pumps.
- [Zroshua](https://github.com/RobinCK/zroshua) — add-on for smart irrigation: zones, schedules, weather, rain and soil sensors and a live site map.
- [Metron](https://github.com/RobinCK/lovelace-metron) — Lovelace cards for energy, solar, battery, gas and money: live flows, statistics, forecasts and bills.
- [Varta](https://github.com/RobinCK/lovelace-varta) — Lovelace cards that keep watch over the house: offline devices grouped by hub or integration, and batteries with a replacement forecast.
- [Deye Inverter Card](https://github.com/RobinCK/lovelace-deye-inverter-card) — Lovelace card with the state and live values of Deye/Sunsynk hybrid inverters.
- [Phase Pair Card](https://github.com/RobinCK/lovelace-phase-pair-card) — Lovelace card for three-phase homes: voltage and power before and after the voltage stabilizers, phase balance.
- [Deck Card](https://github.com/RobinCK/lovelace-deck-card) — adaptive container card that groups cards into segments: pills on wide screens, swipe on phones.
- [Osnova](https://github.com/RobinCK/osnova) — theme for the whole Home Assistant interface with a Ukrainian cross-stitch ornament.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions, issues, or suggestions, please open an issue on GitHub or contact the maintainer.
