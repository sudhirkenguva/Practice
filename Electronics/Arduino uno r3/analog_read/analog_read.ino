/*
  AnalogReadSerial

  Reads an analog input on pin 0, prints the result to the Serial Monitor.
  Graphical representation is available using Serial Plotter (Tools > Serial Plotter menu).
  Attach the center pin of a potentiometer to pin A0, and the outside pins to +5V and ground.

  This example code is in the public domain.

  http://www.arduino.cc/en/Tutorial/AnalogReadSerial
*/

// the setup routine runs once when you press reset:

int LED_PIN = 13;
void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_PIN, LOW);
}

// the loop routine runs over and over again forever:
void loop() {
  // read the input on analog pin 0:
  int sensorValue = analogRead(A0);
  if (sensorValue > 200) {
    digitalWrite(LED_PIN, HIGH);
    Serial.println(sensorValue);
    Serial.println(1);  // for testing
  } else {
    digitalWrite(LED_PIN, LOW);
    Serial.println(sensorValue);
    Serial.println(0); // for testing
  }
  // print out the value you read:

  delay(250);
}
