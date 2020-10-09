import numpy as np
import cv2
import time
import imutils
from frame import *
from motionDetection import *


cap = cv2.VideoCapture(0) 


ret, frame = cap.read()
frame = imutils.resize(frame, width = 750)
frame = cv2.GaussianBlur(frame, (21, 21), 0)
prevFrame = Frame(frame)

motionDetector = MotionDetector(2500, 10, 100, prevFrame)

while (cap.isOpened()):

    cv2.waitKey(1)
    ret, frame = cap.read()
    frame = imutils.resize(frame, width = 750)
    frame = cv2.GaussianBlur(frame, (21, 21), 0)

    if ret == False:
        continue

    currFrame = Frame(frame)


    contours = motionDetector.analyze(currFrame)

    displayFrame = currFrame.frameBGR.copy()

    
    cv2.imshow("frame", displayFrame)

    
    ch = cv2.waitKey(1)
    if ch & 0xFF == ord('q'):
        break

cv2.destroyAllWindows()
cap.release()

