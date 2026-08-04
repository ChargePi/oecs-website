export const MESSY_VENDOR_SPEC_EXCERPTS = [
  {
    vendor: 'Vendor A — DataSheet_v3_FINAL.pdf, page 12',
    text: `4.2 ELECTRICAL SPECIFICATIONS
Rated Amperage (per connector) ................. 32A
Nominal Voltage Range ........................... 400-480 VAC
Number of Phases ................................ 3
Comm. Protocol Support: OCPP1.6-J, proprietary`,
  },
  {
    vendor: 'Vendor B — install-guide-EU-2024.pdf, page 47',
    text: `SECTION 8: POWER OUTPUT
Max Output Current (per phase, continuous) ....  32 Amps
Supported grid config: 3PH
Backend comms: OCPP 2.0.1 compliant
Auth: RFID (Mifare Classic/DESFire), app`,
  },
  {
    vendor: 'Vendor C — Product-Brochure-2023.pdf, page 3',
    text: `Power delivery: up to 22kW
Connector: Type 2 (Mennekes)
Smart charging ready, OCPP-compatible
Supports RFID and Plug&Charge (ISO 15118)`,
  },
] as const

// Trimmed excerpt of a real OECS document — see oecs/examples/ac-wallbox-full.json
export const SAMPLE_OECS_SCHEMA = {
  $schema: 'https://oecs.dev/schema/1.1.0/charger.schema.json',
  version: '1.1.0',
  manufacturer: { name: 'VoltGrid GmbH', country: 'DE' },
  model: { name: 'VG-Home22', type: 'AC', level: 'Level 2' },
  hardware: {
    electrical: {
      input: { phases: 3, maxCurrent: { value: 32, unit: 'A' } },
      output: {
        maxPower: { value: 22, unit: 'kW' },
        ratedOutputCurrent: { min: 6, max: 32, unit: 'A' },
      },
    },
    connectors: [
      { type: 'Type2_Mennekes', currentType: 'AC', maxPower: { value: 22, unit: 'kW' } },
    ],
    userInterface: {
      authenticationMethods: ['rfid', 'plug-and-charge'],
    },
  },
  software: {
    protocols: [{ name: 'OCPP', version: '1.6' }],
  },
} as const
