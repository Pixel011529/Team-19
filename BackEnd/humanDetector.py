import numpy as np
import cv2
from darkflow.net.build import TFNet
import base64


class HumanDetector:

    def __init__(self, minSizeForHumanDetection):

        self.body_classifier = cv2.CascadeClassifier('haarcascade_fullbody.xml')
        self.minSizeForHumanDetection = minSizeForHumanDetection
        self.isHumanDetected = False
        self.noOfHumans = 0
        self.hog = cv2.HOGDescriptor() 
        self.hog.setSVMDetector(cv2.HOGDescriptor_getDefaultPeopleDetector())
        self.options = {
            'model': 'cfg/yolo.cfg',
            'load': 'bin/yolov2.weights',
            'threshold': 0.2,
            }
        self.tfnet = TFNet(self.options)

    def analyzeHaarCascade(self, frame):

        humans = self.body_classifier.detectMultiScale(frame, 1.1, 3)

        self.noOfHumans = 0
        for human in humans:
            if self.area(human) > self.minSizeForHumanDetection:
                self.noOfHumans += 1

        return humans

    def analyzeHOG(self, frame):

        frame = imutils.resize(frame, 
                       width=min(400, frame.shape[1]))
        (humans, _) = self.hog.detectMultiScale(frame, winStride=(4, 4), padding=(4, 4), scale=1.05) 

        self.noOfHumans = 0
        for human in humans:
            if self.area(human) > self.minSizeForHumanDetection:
                self.noOfHumans += 1

        return humans

    def analyzeYOLO(self, frame):
        
        humans = self.tfnet.return_predict(frame)

        self.noOfHumans = 0
        for human in humans:
            if human['label'] == 'person' and human['confidence']>0.4:
                self.noOfHumans += 1
                text = '{}: {:.0f}%'.format('person', human['confidence'] * 100)
                tl = (human['topleft']['x'], human['topleft']['y'])
                br = (human['bottomright']['x'], human['bottomright']['y'])
                frame = cv2.rectangle(frame, tl, br, (0, 255, 255), 5)
                frame = cv2.putText(frame, text, tl, cv2.FONT_HERSHEY_COMPLEX, 1, (0, 0, 0), 2)
        if self.noOfHumans>0:
            return frame,True
        else:
            return frame,False
        
    
    def drawHumans(self, frame, humans):

        for (x,y,w,h) in humans:
            if self.area((x,y,w,h)) > self.minSizeForHumanDetection:    
                cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 255), 2)
        
        return frame

    def area(self, rectangle):

        return rectangle[2] * rectangle[3]

    def img2base64(self,frame,img_name):
        _, im_arr = cv2.imencode('.jpg', frame)  # im_arr: image in Numpy one-dim array format.
        im_bytes = im_arr.tobytes()
        im_b64 = base64.b64encode(im_bytes)
        return {
            str(img_name):str(im_b64)
        }

