from ultralytics import YOLO
import cv2
import time
import pygame



pygame.mixer.init()

alarm_sound = 'audio.wav'  

video_path = "video2.mp4"

cap = cv2.VideoCapture(video_path)

ret, frame = cap.read()

model_path = "best.pt"  #הגדרת הנתיב למודל שהוכשר

model = YOLO(model_path)  

threshold = 0.5  #קביעה מתי אובייקט נחשב כזוהה

start_time = None
detected = False

while ret:

    results = model(frame)[0]

    print(results)

    head_detected = False  #אתחול משתנה כדי לעקוב אם ראש זוהה בפריים הנוכחי

    for result in results.boxes.data.tolist():
        x1, y1, x2, y2, score, class_id = result

        if score > threshold:   #בדיקה אם הציון של הזיהוי גבוה מהסף שנקבע

            color = (0, 255, 0)  
           
            cv2.rectangle(frame, (int(x1), int(y1)), (int(x2), int(y2)), color, 2)

           
            cv2.putText(frame, results.names[int(class_id)].upper(), (int(x1), int(y1 - 10)),
                        cv2.FONT_HERSHEY_SIMPLEX, 1.3, color, 3, cv2.LINE_AA)

            if results.names[int(class_id)].upper() == "HEAD":
                head_detected = True
                if not detected:
                    start_time = time.time()
                    detected = True
                else:
                    elapsed_time = time.time() - start_time
                    if elapsed_time >= 30:
                        pygame.mixer.music.load(alarm_sound)
                        pygame.mixer.music.play()

    if not head_detected:
        detected = False
        start_time = None

   
    cv2.imshow('Video', frame)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

    ret, frame = cap.read()

cap.release()
cv2.destroyAllWindows()
