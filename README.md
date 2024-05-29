
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

1. **Clone the repository**:
   ```bash
   git clone https://github.com/RobinCK/solax2ha.git
   cd solax2ha
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Build the project**:
   ```bash
   npm run build
   ```

4. **Create a `.env` file**:
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

5. **Run the service**:
   ```bash
   node ./dist/index.js
   ```

6. **Set up cron for periodic execution**:
   Open crontab for editing:
   ```bash
   crontab -e
   ```

   Add the following line to run the service every 10 seconds:
   ```bash
   */1 * * * * /path/to/node /path/to/solax2ha/dist/index.js
   ```


## Usage

After installation and configuration, the service will automatically create sensors in Home Assistant, allowing you to monitor your Solax inverter in real-time.

## Contributing

We welcome contributions to Solax2HA! If you have any ideas or want to make changes, please fork the repository and submit a pull request. Ensure your code adheres to the existing style and includes tests where applicable.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions, issues, or suggestions, please open an issue on GitHub or contact the maintainer.
