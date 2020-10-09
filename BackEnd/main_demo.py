import numpy as np
import cv2
import time
import imutils
from frame import *
from motionDetection import *
from humanDetector import *
from timer import *
from rooms import *
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db



'''
#====================NOTIFICATION====================
import smtplib
s = smtplib.SMTP('smtp.gmail.com', 587)
s.starttls() 
s.login("pixelhackathon@gmail.com","Hackathon123")
message = "House is under Attack......."
receiver_mail="naveenselvam15@gmail.com"
send_flag=True
#====================================================
'''

cap = cv2.VideoCapture(0) 


ret, frame = cap.read()
frame = imutils.resize(frame, width = 750)

prevFrame = Frame(frame)

room = Rooms(2, 2)
motionDetector = MotionDetector(2500, 10, 100, prevFrame)
humanDetector = HumanDetector(2500)
timer = Timer(2)

#========================================
cred=credentials.Certificate('hackathon-pixel-firebase-adminsdk-vw0ag-2c14c90828.json')

firebase_admin.initialize_app(cred,{
    'databaseURL':'https://hackathon-pixel.firebaseio.com/'

})

#ref=db.reference("/")
#ref.set({})

details_ref = db.reference("/DetailsTwo")
images_ref = db.reference("/RoomTwo")
details_ref.set({})
images_ref.set({})
details = room.get_status()
details_ref.set(details)
img_name=0

#============================================




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
        displayFrame,ret_yolo = humanDetector.analyzeYOLO(displayFrame)
        details=room.get_status()
        details_ref.set(details)
        data = humanDetector.img2base64(displayFrame,img_name)
        if ret_yolo:
            img_name+=1
            #images_ref.update(data)

            '''
            if send_flag==True:
                s.sendmail("pixelhackathon@gmail.com", receiver_mail, message)
                send_flag=False
            '''

        timer.update(time.time())


    room.update(humanDetector)
    
    

    roomInfo = room.displayImage()

    cv2.imshow("YOLO object detection and Room status", np.hstack((displayFrame, roomInfo)))


cv2.destroyAllWindows()
cap.release()

