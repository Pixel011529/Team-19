import numpy as np
import cv2
import time
import imutils
from frame import *
from motionDetection import *
from humanDetector import *
from timer import *
from rooms import *


cap = cv2.VideoCapture(0) 


ret, frame = cap.read()
frame = imutils.resize(frame, width = 750)

prevFrame = Frame(frame)

room = Rooms(2, 3)
motionDetector = MotionDetector(2500, 10, 100, prevFrame)
humanDetector = HumanDetector(2500)
timer = Timer(2)

while (cap.isOpened()):

    cv2.waitKey(1)
    ret, frame = cap.read()
    frame = imutils.resize(frame, width = 750)

    if ret == False:
        continue

    currFrame = Frame(frame)

    contours = motionDetector.analyze(currFrame)

    ch = cv2.waitKey(1)
    if ch & 0xFF == ord('q'):
        break

    if ch == ord('r'):
        room.restart()

    if timer.frameToBeSkipped(time.time()):
        motionDetector.firstFrame = currFrame
        continue

    displayFrame = currFrame.frameBGR.copy()

    if motionDetector.movementPersistentCounter >= 98:
        displayFrame = humanDetector.analyzeYOLO(displayFrame)
        timer.update(time.time())

    room.update(humanDetector)
    
    

    roomInfo = room.displayImage()

    cv2.imshow("YOLO object detection and Room status", np.hstack((displayFrame, roomInfo)))


cv2.destroyAllWindows()
cap.release()

