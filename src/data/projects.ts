import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "obstacle-avoiding-robot",
    title: "Obstacle Avoiding Robot",
    difficulty: "Beginner",
    time: "3–4 hours",
    technologies: ["Arduino", "Robotics", "Ultrasonic"],
    components: ["Arduino UNO", "HC-SR04 ultrasonic sensor", "L298N motor driver", "2× DC gear motors", "Chassis + wheels", "Battery pack"],
    description:
      "The classic first robot — a car that drives itself around obstacles using sound echoes. You'll learn sensor reading, motor control and decision logic in one build.",
    objective:
      "Build an autonomous robot that continuously scans ahead with ultrasonic sound and steers away from obstacles without any human input.",
    howItWorks: [
      "The HC-SR04 fires an ultrasonic pulse and measures the echo time.",
      "Echo time converts to distance (distance = time × 0.034 / 2 cm).",
      "If something is closer than 20 cm, the robot stops, scans and turns toward the clearer side.",
      "Otherwise it drives forward using the L298N-controlled motors.",
    ],
    circuit: [
      "HC-SR04 VCC → 5V, GND → GND",
      "HC-SR04 TRIG → D9, ECHO → D10",
      "L298N IN1/IN2 → D5/D6, IN3/IN4 → D7/D8 (PWM on enable pins)",
      "Motors → OUT1/OUT2 and OUT3/OUT4",
      "Battery pack → L298N 12V terminal; common ground with Arduino",
    ],
    codeLang: "cpp",
    code: `const int TRIG = 9, ECHO = 10;
// Motor A
const int IN1 = 5, IN2 = 6;
// Motor B
const int IN3 = 7, IN4 = 8;

long readDistanceCM() {
  digitalWrite(TRIG, LOW); delayMicroseconds(2);
  digitalWrite(TRIG, HIGH); delayMicroseconds(10);
  digitalWrite(TRIG, LOW);
  long duration = pulseIn(ECHO, HIGH, 30000);
  return duration * 0.034 / 2;
}

void driveForward() { digitalWrite(IN1,HIGH); digitalWrite(IN2,LOW);
                      digitalWrite(IN3,HIGH); digitalWrite(IN4,LOW); }
void stopAll()      { digitalWrite(IN1,LOW); digitalWrite(IN2,LOW);
                      digitalWrite(IN3,LOW); digitalWrite(IN4,LOW); }
void turnRight()    { digitalWrite(IN1,LOW);  digitalWrite(IN2,HIGH);
                      digitalWrite(IN3,HIGH); digitalWrite(IN4,LOW); }

void setup() {
  pinMode(TRIG, OUTPUT); pinMode(ECHO, INPUT);
  for (int p : {IN1,IN2,IN3,IN4}) pinMode(p, OUTPUT);
}

void loop() {
  long d = readDistanceCM();
  if (d > 0 && d < 20) {
    stopAll(); delay(200);
    turnRight(); delay(400);
  } else {
    driveForward();
  }
}`,
    steps: [
      { title: "Assemble the chassis", detail: "Mount motors, wheels and the caster. Secure the Arduino and driver on top." },
      { title: "Wire the motor driver", detail: "Connect motors to L298N outputs, control pins to D5–D8, and share grounds." },
      { title: "Add the ultrasonic eyes", detail: "Mount HC-SR04 facing forward; wire trigger/echo to D9/D10." },
      { title: "Upload & test sensors", detail: "Flash a serial print of distance before adding driving logic." },
      { title: "Add decision logic", detail: "Upload full code and watch it navigate. Tune the 20 cm threshold to taste." },
    ],
    commonErrors: [
      { error: "Robot moves backward instead of forward", fix: "Swap either motor's two wires to flip its direction." },
      { error: "Distance reads 0 or random", fix: "Check TRIG/ECHO aren't swapped; ensure common ground between battery and Arduino." },
      { error: "Robot resets when motors start", fix: "Power motors from battery via L298N — never from Arduino's 5V." },
    ],
    challenge: "Level up: add servo-mounted scanning so the robot compares left/right distances before choosing a turn.",
    related: ["line-following-robot", "bluetooth-control-car", "smart-dustbin"],
    featured: true,
    labTemplate: true,
  },
  {
    slug: "smart-dustbin",
    title: "Smart Dustbin",
    difficulty: "Beginner",
    time: "2 hours",
    technologies: ["Arduino", "Ultrasonic", "Servo"],
    components: ["Arduino UNO", "HC-SR04", "SG90 servo motor", "Dustbin with hinged lid", "9V battery"],
    description:
      "A touchless dustbin that opens its lid when you approach — hygiene tech you can build in an afternoon and show off at home instantly.",
    objective: "Detect a hand above the bin and actuate the lid hands-free using one sensor and one servo.",
    howItWorks: [
      "Ultrasonic sensor points upward at approaching objects.",
      "When distance < 25 cm, Arduino raises the servo arm to open the lid.",
      "After 4 seconds without detection, the lid closes gently.",
    ],
    circuit: [
      "HC-SR04 VCC→5V, GND→GND, TRIG→D6, ECHO→D7",
      "Servo signal → D9, servo VCC → 5V (external if jittery), GND → GND",
    ],
    codeLang: "cpp",
    code: `#include <Servo.h>
Servo lid;
const int TRIG = 6, ECHO = 7;

void setup() {
  lid.attach(9);
  lid.write(0);            // closed
  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);
}

int distanceCM() {
  digitalWrite(TRIG, LOW); delayMicroseconds(2);
  digitalWrite(TRIG, HIGH); delayMicroseconds(10);
  digitalWrite(TRIG, LOW);
  long d = pulseIn(ECHO, HIGH, 30000) * 0.034 / 2;
  return (int)d;
}

void loop() {
  if (distanceCM() < 25 && distanceCM() > 0) {
    lid.write(90);         // open
    delay(4000);           // stay open
    lid.write(0);          // close gently
    delay(300);
  }
  delay(100);
}`,
    steps: [
      { title: "Mount the sensor", detail: "Fix HC-SR04 under the rim pointing at where your hand will be." },
      { title: "Attach servo linkage", detail: "Connect servo horn to the lid with a stiff wire linkage." },
      { title: "Wire & upload", detail: "Complete wiring, upload sketch, power on." },
      { title: "Tune motion", detail: "Adjust open/close angles and hold time for smooth action." },
    ],
    commonErrors: [
      { error: "Servo jitters or Arduino resets", fix: "Power servo from external 5V supply, not the board." },
      { error: "Opens randomly", fix: "Point sensor away from moving curtains/fans; raise threshold logic with averaging." },
    ],
    challenge: "Add a counter that tracks opens per day on an LCD — or log fills to the cloud for an IoT upgrade.",
    related: ["obstacle-avoiding-robot", "smart-home-hub", "iot-plant-monitor"],
    labTemplate: true,
  },
  {
    slug: "line-following-robot",
    title: "Line Following Robot",
    difficulty: "Beginner",
    time: "3 hours",
    technologies: ["Arduino", "IR Sensors", "Robotics"],
    components: ["Arduino UNO", "2–5× IR sensors", "L298N driver", "2× DC motors", "Black tape track"],
    description:
      "Build a bot that hugs a black line like it's on rails. The gateway drug into control systems, PID and competition robotics.",
    objective: "Keep a robot centered on a black line using infrared reflectance sensing and differential steering.",
    howItWorks: [
      "IR emitters reflect differently off black vs white surfaces.",
      "Left/right sensors report whether each side sees the line.",
      "Simple bang-bang (or PID) steering keeps the line between the sensors.",
    ],
    circuit: [
      "IR left → D2, IR right → D3 (digital out)",
      "L298N IN1–IN4 → D4,D5,D6,D7",
      "Motors → driver outputs; battery → driver power input",
    ],
    codeLang: "cpp",
    code: `// 1 = line detected (adjust for your module's logic)
const int SENS_L = 2, SENS_R = 3;

void setMotors(int l, int r) { /* write to IN1..IN4 */ }

void loop() {
  bool left  = digitalRead(SENS_L);
  bool right = digitalRead(SENS_R);

  if (left && right)       setMotors(1, 1);   // forward
  else if (left && !right) setMotors(1, 0);   // drift right... wait: turn toward line
  else if (!left && right) setMotors(0, 1);   // correct other way
  else                     setMotors(0, 0);   // lost line: stop
}`,
    steps: [
      { title: "Make a track", detail: "Black electrical tape on white chart paper — gentle curves first." },
      { title: "Calibrate sensors", detail: "Note digital readings over black vs white; set mounting height ~1 cm." },
      { title: "Wire & flash", detail: "Connect everything, upload, place on line." },
      { title: "Tune behavior", detail: "Adjust speed until corners are taken cleanly; then try PID." },
    ],
    commonErrors: [
      { error: "Jittery zigzag motion", fix: "Lower speed, mount sensors closer together, add simple smoothing/PID." },
      { error: "Fails on shiny surfaces", fix: "IR reflects oddly on gloss — use matte paper/tape." },
    ],
    challenge: "Convert to 5-sensor array + PID and race for fastest lap.",
    related: ["obstacle-avoiding-robot", "bluetooth-control-car", "ai-vision-robot"],
    labTemplate: true,
  },
  {
    slug: "bluetooth-control-car",
    title: "Bluetooth Control Car",
    difficulty: "Beginner",
    time: "2–3 hours",
    technologies: ["Arduino", "Bluetooth", "Robotics"],
    components: ["Arduino UNO", "HC-05 Bluetooth module", "L298N", "2× DC motors", "Phone app"],
    description:
      "Drive a robot live from your phone over Bluetooth. Your first step into wireless communication and app-to-hardware protocols.",
    objective: "Receive directional commands over a serial Bluetooth link and translate them into motor motion.",
    howItWorks: [
      "Phone app sends single characters ('F','B','L','R','S') over BT serial.",
      "HC-05 feeds them to Arduino's software/hardware serial.",
      "A switch statement maps each command to motor states.",
    ],
    circuit: [
      "HC-05 TX → Arduino RX (D0/D2 soft), RX → voltage divider from Arduino TX (1kΩ/2kΩ)",
      "HC-05 VCC → 5V, GND → GND",
      "Motor driver as in obstacle robot",
    ],
    codeLang: "cpp",
    code: `#include <SoftwareSerial.h>
SoftwareSerial bt(2, 3); // RX, TX

void drive(char c) {
  switch (c) {
    case 'F': /* forward */ break;
    case 'B': /* backward */ break;
    case 'L': /* left */ break;
    case 'R': /* right */ break;
    default:  /* stop */ break;
  }
}

void setup() { bt.begin(9600); }

void loop() {
  if (bt.available()) drive(bt.read());
}`,
    steps: [
      { title: "Pair HC-05", detail: "Pair with phone (PIN 1234/0000), test with a serial terminal app." },
      { title: "Wire carefully", detail: "Use a voltage divider on HC-05 RX — it's a 3.3V pin!" },
      { title: "Implement commands", detail: "Start with F/S only, then extend." },
      { title: "Drive!", detail: "Send chars from app; refine turning feel." },
    ],
    commonErrors: [
      { error: "No response", fix: "Confirm baud 9600 and TX/RX not swapped." },
      { error: "Garbage characters", fix: "Baud mismatch — check HC-05 default and app settings." },
    ],
    challenge: "Write your own app in MIT App Inventor with a joystick UI.",
    related: ["obstacle-avoiding-robot", "gesture-controlled-robot", "line-following-robot"],
  },
  {
    slug: "iot-plant-monitor",
    title: "IoT Plant Monitor",
    difficulty: "Intermediate",
    time: "4–5 hours",
    technologies: ["ESP32", "IoT", "Sensors", "Cloud"],
    components: ["ESP32 dev board", "Capacitive soil moisture sensor", "DHT22", "WiFi network", "Dashboard (e.g., MQTT app)"],
    description:
      "Give your plants a voice: soil moisture and climate data streamed to your phone, with alerting when they're thirsty.",
    objective: "Publish live soil/climate telemetry from ESP32 to a dashboard and trigger watering alerts.",
    howItWorks: [
      "ESP32 reads capacitive moisture (analog) + DHT22 (temp/humidity).",
      "Readings publish as MQTT JSON every 60 s.",
      "Dashboard subscribes and visualizes trends; rules fire alerts.",
    ],
    circuit: [
      "Soil sensor AO → GPIO34, VCC → 3.3V",
      "DHT22 DATA → GPIO4 (10kΩ pull-up to 3.3V)",
    ],
    codeLang: "cpp",
    code: `#include <WiFi.h>
#include <PubSubClient.h>
#include <DHT.h>
DHT dht(4, DHT22);

void setup() {
  WiFi.begin("SSID", "PASS");
  dht.begin();
}

void loop() {
  float moisture = analogRead(34) / 4095.0 * 100;
  float temp = dht.readTemperature();
  char payload[96];
  snprintf(payload, sizeof(payload),
    "{\\"moisture\\":%.1f,\\"temp\\":%.1f}", moisture, temp);
  mqtt.publish("home/plant1", payload);
  delay(60000);
}`,
    steps: [
      { title: "Wire sensors", detail: "Keep analog lines short; capacitive sensors beat resistive for longevity." },
      { title: "Calibrate dry/wet", detail: "Record raw values in air and water; map to 0–100%." },
      { title: "Set up broker", detail: "Use any public/test MQTT broker or local Mosquitto." },
      { title: "Visualize", detail: "Subscribe from an MQTT dashboard app; add alert rule below 30%." },
    ],
    commonErrors: [
      { error: "NaN temperature", fix: "Check pull-up resistor and 3.3V supply to DHT22." },
      { error: "Moisture drifts over weeks", fix: "Corrosion on probe — use capacitive sensors, coat exposed copper." },
    ],
    challenge: "Close the loop: add a small pump that waters automatically when dry.",
    related: ["smart-home-hub", "smart-dustbin", "weather-station-node"],
    featured: true,
    labTemplate: true,
  },
  {
    slug: "smart-home-hub",
    title: "Smart Home Automation Hub",
    difficulty: "Intermediate",
    time: "6+ hours",
    technologies: ["IoT", "ESP32", "Relays", "Sensors"],
    components: ["ESP32", "4-channel relay", "PIR sensor", "LDR", "DHT11", "Appliances/bulbs"],
    description:
      "Automate a room: lights that respond to presence, fans tied to temperature and everything controllable from your phone — safely.",
    objective: "Combine sensing, cloud control and safety-aware switching into one coherent home automation node.",
    howItWorks: [
      "PIR triggers lights only in darkness (LDR gate).",
      "Temperature controls fan relay thresholds.",
      "MQTT topics let phone override any channel manually.",
    ],
    circuit: [
      "Relay IN1–IN4 → GPIO 26,27,14,12 · relay VCC→5V JD-VCC jumper removed for isolation",
      "PIR OUT → GPIO13 · LDR divider → GPIO33",
    ],
    codeLang: "cpp",
    code: `bool dark = analogRead(33) < 1200;
bool person = digitalRead(13);
digitalWrite(26, dark && person ? HIGH : LOW);   // light
float t = dht.readTemperature();
digitalWrite(27, t > 28 ? HIGH : LOW);           // fan`,
    steps: [
      { title: "Safety first", detail: "Work with low-voltage bulbs/DC appliances only unless supervised." },
      { title: "Wire relays", detail: "Common + NO contacts; never bypass fuses." },
      { title: "Sensor fusion", detail: "Combine PIR + LDR so lights don't blaze at noon." },
      { title: "Cloud override", detail: "Subscribe to control topics; last-command-wins policy." },
    ],
    commonErrors: [
      { error: "Relay clicks endlessly", fix: "Debounce PIR and add minimum on/off times." },
      { error: "ESP32 browns out", fix: "Relay coils need their own 5V rail with common ground." },
    ],
    challenge: "Add energy monitoring (ACS712) and a daily usage report.",
    related: ["iot-plant-monitor", "smart-dustbin"],
  },
  {
    slug: "gesture-controlled-robot",
    title: "Gesture Controlled Robot",
    difficulty: "Advanced",
    time: "6 hours",
    technologies: ["Arduino", "IMU", "Radio", "Robotics"],
    components: ["2× Arduino/NRF pairs", "MPU6050 IMU glove", "L298N car", "Battery ×2"],
    description:
      "Wear a sensor glove, tilt your hand, and the robot mirrors your gesture over radio. IMU math meets wireless robotics.",
    objective: "Transmit hand orientation from an IMU glove to drive a robot intuitively.",
    howItWorks: [
      "MPU6050 pitch/roll maps to throttle and steering.",
      "Transmitter packet sent via NRF24L01 20×/s.",
      "Receiver translates orientation to motor PWM.",
    ],
    circuit: [
      "Glove: MPU6050 SDA/SCL → A4/A5, NRF24 → SPI pins 9-13",
      "Car: NRF24 receiver + L298N as standard",
    ],
    codeLang: "cpp",
    code: `// Transmitter core
float pitch = mpu.getPitch(), roll = mpu.getRoll();
int throttle = map(pitch, -45, 45, -255, 255);
int steer    = map(roll,  -45, 45, -100, 100);
radio.write(&packet, sizeof(packet)); // {throttle, steer}`,
    steps: [
      { title: "Build the glove", detail: "Strap MPU6050 to back of hand; keep wiring flexible." },
      { title: "Read IMU reliably", detail: "Calibrate offsets flat; filter noise with complementary filter." },
      { title: "Link radios", detail: "Match pipes/channels; verify with ping test before driving." },
      { title: "Map & tune", detail: "Deadzone ±8° prevents runaway; expo curve improves feel." },
    ],
    commonErrors: [
      { error: "Radio range terrible", fix: "Add 10–100µF cap across NRF24 VCC/GND; power from 3.3V regulator." },
      { error: "Robot creeps when level", fix: "Widen deadzone / recalibrate IMU zero point." },
    ],
    challenge: "Encode finger flex sensors too — grip to honk!",
    related: ["bluetooth-control-car", "ai-vision-robot"],
  },
  {
    slug: "ai-vision-robot",
    title: "AI Vision Robot",
    difficulty: "Advanced",
    time: "8+ hours",
    technologies: ["Computer Vision", "Python", "Robotics", "AI"],
    components: ["Raspberry Pi 4/5", "Pi Camera", "Motor HAT/driver", "Chassis", "Power bank"],
    description:
      "A robot that sees. Track faces, follow colored balls or detect gestures — real computer vision running onboard, making driving decisions.",
    objective: "Run onboard vision inference and convert detections directly into navigation commands.",
    howItWorks: [
      "Camera frames stream into OpenCV on the Pi.",
      "Color tracking (HSV mask) or a trained TFLite model finds targets.",
      "Target position error drives proportional steering; size estimates distance.",
    ],
    circuit: [
      "Camera → CSI ribbon",
      "HAT I2C → Pi (SDA/SCL)",
      "Motors → HAT outputs; 7.4V pack → HAT VIN",
    ],
    codeLang: "python",
    code: `import cv2, numpy as np

def target_offset(frame):
    hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
    mask = cv2.inRange(hsv, (35,80,80), (85,255,255))
    M = cv2.moments(mask)
    if M["m00"] > 500:
        cx = int(M["m10"]/M["m00"])
        return (cx - frame.shape[1]//2) / (frame.shape[1]/2)
    return None

while True:
    err = target_offset(camera.read())
    steer = clamp(err * 120, -120, 120)
    hat.set_speeds(BASE - steer, BASE + steer)`,
    steps: [
      { title: "Set up Pi", detail: "64-bit OS, OpenCV, camera enabled; test preview first." },
      { title: "Vision pipeline", detail: "Get stable HSV tracking at ≥15 FPS before motors." },
      { title: "Control loop", detail: "Proportional steering; cap speeds for safety." },
      { title: "Upgrade to ML", detail: "Collect dataset → Teachable Machine/TFLite → swap detector in." },
    ],
    commonErrors: [
      { error: "Tracking fails under yellow light", fix: "Re-tune HSV ranges in actual lighting; auto-exposure off helps." },
      { error: "Laggy response", fix: "Drop resolution to 320×240; move heavy ops into numpy." },
    ],
    challenge: "Autonomous ball-fetch: find, approach, stop at correct distance, celebrate with LEDs.",
    related: ["gesture-controlled-robot", "line-following-robot"],
    featured: true,
  },
  {
    slug: "weather-station-node",
    title: "Solar Weather Station Node",
    difficulty: "Intermediate",
    time: "5 hours",
    technologies: ["ESP32", "IoT", "Solar", "Sensors"],
    components: ["ESP32", "BME280", "Rain sensor", "Solar panel + TP4056 + 18650", "Enclosure"],
    description:
      "An off-grid weather node that sips solar power, sleeps between readings and reports rain, pressure and climate 24/7.",
    objective: "Deploy a self-powered environmental logger with deep-sleep duty cycling.",
    howItWorks: [
      "Every 10 min: wake → sample BME280 + rain → publish MQTT → deep sleep.",
      "TP4056 charges 18650 from panel; ESP32 runs between 3.3–4.2V via regulator.",
    ],
    circuit: [
      "Panel → TP4056 IN+, battery → B+/B−, OUT+ → 3.3V reg → ESP32",
      "BME280 I2C → GPIO21/22 · Rain AO → GPIO34",
    ],
    codeLang: "cpp",
    code: `RTC_DATA_ATTR int bootCount = 0;

void setup() {
  float t = bme.readTemperature();
  float p = bme.readPressure()/100.0F;
  int rain = analogRead(34);
  publish(t, p, rain, ++bootCount);
  esp_sleep_enable_timer_wakeup(600ULL * 1000000);
  esp_deep_sleep_start();
}`,
    steps: [
      { title: "Bench test", detail: "Verify all sensors + publishing before going off-grid." },
      { title: "Power path", detail: "Measure sleep current (~µA goal); isolate LED hogs." },
      { title: "Weatherproof", detail: "IP-rated box, cable glands, sensor ports face down/out." },
      { title: "Deploy & graph", detail: "Mount, then watch days of clean telemetry roll in." },
    ],
    commonErrors: [
      { error: "Dies overnight", fix: "Panel undersized/shaded — reposition or increase battery capacity." },
      { error: "Rain sensor always wet", fix: "It corrodes! Power it from a GPIO only during sampling." },
    ],
    challenge: "Mesh multiple nodes with ESP-NOW into a neighborhood microclimate map.",
    related: ["iot-plant-monitor", "smart-home-hub"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const projectTechFilters = [...new Set(projects.flatMap((p) => p.technologies))].sort();
