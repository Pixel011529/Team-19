import numpy as np
import cv2
from frame import *
from motionDetection import *

cap = cv2.VideoCapture(0)

motionDetector = MotionDetector(2500)

ret, frame = cap.read()
prevFrame = Frame(frame)



while (cap.isOpened()):

    ret, frame = cap.read()
    currFrame = Frame(frame)

    

    ch = cv2.waitKey(1)
    if ch == ord('q'):
        break

    thresh, contours = motionDetector.motionAnalyzer(currFrame.frameGrey, prevFrame.frameGrey)

    subtractedImage = motionDetector.drawContours(thresh, contours)

    cv2.imshow("subtractedImage", subtractedImage)
    cv2.waitKey(1)

    cv2.imshow("original", currFrame.frameBGR)

    prevFrame = currFrame    

cv2.destroyAllWindows()
cap.release()
