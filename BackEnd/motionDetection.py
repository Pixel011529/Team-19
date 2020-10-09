import numpy as np
import cv2
import time

class MotionDetector:

    def __init__(self, minSizeForMotion, framesToPersist, movementDetectedPersistence, firstFrame):

        self.minSizeForMotion = minSizeForMotion
        self.isMotionDetected = False
        self.framesToPersist = framesToPersist
        self.movementDetectedPersistence = movementDetectedPersistence
        self.delayCounter = 0
        self.movementPersistenceCounter = 0
        self.firstFrame = firstFrame

    def motionAnalyzer(self, currFrame, prevFrame):

        gray = cv2.GaussianBlur(currFrame, (21, 21), 0)
        frameDiff = cv2.absdiff(currFrame, prevFrame)
        thresh = cv2.threshold(frameDiff, 25, 255, cv2.THRESH_BINARY)[1]
        thresh = cv2.dilate(thresh, None, iterations = 2)
        contours, _ = cv2.findContours(thresh.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

        time.sleep(0.1)
        for contour in contours:
            if cv2.contourArea(contour) > self.minSizeForMotion:
                self.isMotionDetected = True
                return thresh, contours
        
        self.isMotionDetected = False
        return thresh, contours     
    
    def drawContours(self, frame, contours):
        
        for contour in contours:
            if cv2.contourArea(contour) > self.minSizeForMotion:
                (x, y, w, h) = cv2.boundingRect(contour)
                cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)
        return frame
