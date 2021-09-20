import sys
import json
import requests
import RPi.GPIO as GPIO
from mfrc522 import SimpleMFRC522

reader= SimpleMFRC522()

try:
    id = reader.read()
    print(id)
    
    
finally:
    GPIO.cleanup()
     