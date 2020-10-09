import time

class Timer:

    def __init__(self, timeSkipping):
        self.start = None
        self.timeSkipping = timeSkipping

    def frameToBeSkipped(self, currTime):
        if self.start == None:
            return False
        elif currTime - self.start < self.timeSkipping:
            return True
        else:
            self.start = None
            return False

    def update(self, currTime):
        self.start = currTime