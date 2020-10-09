import numpy as np
import cv2

class Rooms:

    def __init__(self, floorNo, roomNo):

        self.floorNo = floorNo
        self.roomNo = roomNo
        self.bluePrint = None   
        self.noOfIntruders = 0
        self.noOfWeapons = 0
        self.isSecure = True

    def displayImage(self):

        image = np.zeros((562, 750, 3), np.uint8)
        cv2.putText(image, "Floor No: " + str(self.floorNo), (10,35), cv2.FONT_HERSHEY_SIMPLEX, 1.2, (255,255,255), 3, cv2.LINE_AA)
        cv2.putText(image, "Room No: " + str(self.roomNo), (10,95), cv2.FONT_HERSHEY_SIMPLEX, 1.2, (255,255,255), 3, cv2.LINE_AA)
        cv2.putText(image, "No of Intruders: " + str(self.noOfIntruders), (10,155), cv2.FONT_HERSHEY_SIMPLEX, 1.2, (255,255,255), 3, cv2.LINE_AA)
        cv2.putText(image, "No of Weapons: " + str(self.noOfWeapons), (10,215), cv2.FONT_HERSHEY_SIMPLEX, 1.2, (255,255,255), 3, cv2.LINE_AA)
        cv2.putText(image, "Is Secure: " + str(self.isSecure), (10,275), cv2.FONT_HERSHEY_SIMPLEX, 1.2, (255,255,255), 3, cv2.LINE_AA)

        return image 
    
    def update(self, humanDetector):

        self.noOfIntruders = max(self.noOfIntruders, humanDetector.noOfHumans)

        self.noOfWeapons = max(self.noOfWeapons, humanDetector.noOfHumans)

        if self.noOfIntruders > 0:
            self.isSecure = False



    def restart(self):

        self.noOfIntruders = 0
        self.noOfWeapons = 0
        self.isSecure = True

    def get_status(self):
        return {"FloorNo":str(self.floorNo),
                "RoomNo":str(self.roomNo),
                "NoOfIntruders":str(self.noOfIntruders),
                "NoOfWeapons":str(self.noOfWeapons),
                "IsSecure":str(self.isSecure)}

