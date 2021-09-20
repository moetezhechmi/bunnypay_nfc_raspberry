import RPi.GPIO as GPIO
from mfrc522 import SimpleMFRC522

reader = SimpleMFRC522()
try:
    text="hech"
    id = reader.read()
    reader.write(text)
    print(id)
finally:
    GPIO.cleanup()