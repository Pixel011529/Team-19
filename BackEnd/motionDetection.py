import numpy as np
import cv2
import time
import imutils

class MotionDetector:

    def __init__(self, minSizeForMotion, framesToPersist, movementDetectedPersistence, frame):

        self.minSizeForMotion = minSizeForMotion
        self.framesToPersist = framesToPersist
        self.movementDetectedPersistence = movementDetectedPersistence
        self.delayCounter = 0
        self.movementPersistentCounter = 0
        self.isTransientMotionDetected = False
        self.isMovementPersistent = False
        self.firstFrame = frame

    def analyze(self, currFrame):

        
        frameDiff = cv2.absdiff(currFrame.frameGrey, self.firstFrame.frameGrey)
        thresh = cv2.threshold(frameDiff, 25, 255, cv2.THRESH_BINARY)[1]
        thresh = cv2.dilate(thresh, None, iterations = 2)
        
        contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

        self.delayCounter += 1
        if self.delayCounter > self.framesToPersist:
            self.delayCounter = 0
            self.firstFrame = currFrame

        self.isTransientMotionDetected = False

        for contour in contours:
            (x, y, w, h) = cv2.boundingRect(contour)
            if cv2.contourArea(contour) > self.minSizeForMotion:
                self.isTransientMotionDetected = True
        
        if self.isTransientMotionDetected:
            self.isMovementPersistent = True
            self.movementPersistentCounter = self.movementDetectedPersistence 

        if self.movementPersistentCounter > 0:
            text = "Movement Detected " + str(self.movementPersistentCounter)
            self.movementPersistentCounter -= 1
        else:
            text = "No Movement Detected"

        thresh = cv2.cvtColor(thresh, cv2.COLOR_GRAY2BGR)
        cv2.imshow("thresh", frameDiff)

        return contours
        
        
                
    
    def drawContours(self, frame, contours):
        
        for contour in contours:
            if cv2.contourArea(contour) > self.minSizeForMotion:
                (x, y, w, h) = cv2.boundingRect(contour)
                cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)
        return frame