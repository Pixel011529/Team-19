import numpy as np
import cv2

class Frame:

    def __init__(self, frame):

        self.frameBGR = frame
        self.frameGrey = cv2.cvtColor(self.frameBGR, cv2.COLOR_BGR2GRAY)

    