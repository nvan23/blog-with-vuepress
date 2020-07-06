---
title: How to merge new branch with master
---
 
# How to :eyes: merge new branch with master 

## 1. git branch van-dep-trai

Lên Gitlab tạo 1 branch ngắn ngọn xúc tích. Sau đó vào thư mục root paste dòng này.

## 2. git branch

Kiểm tra mình đang ở đâu trong thế giới này.

## 3. git checkout van-dep-trai

Chuyển qua branch vừa mới tạo:

## 4. git status

Branch như vậy là ok, tới phần quăng đóng code vào branch, Kiểm tra xem mình làm project thành ra cái quái gì rồi:

## 5. git add "path" and git commit -m "your commit"

Sau khi con máy báo những gì mình làm (màu đỏ đỏ) thì bắt đầu add nó theo thứ tự các chức năng (Thêm mới thì dùng nhãn "Feature: ...", Sửa code thì dùng nhãn "Inprovement:...", "..." là tùy vào nội công mỗi thằng để đặt sao cho xúc && tích, :V )

* git add "path"
Ví dụ: git add ./src/app.js

* git commit -m ""
Xong mỗi cái chức năng thì commit lại

Lặp lại 2 bước trên để cho tới khi hết đống mình đã làm hôm nay

## 6. git pull origin van-dep-trai

Xong 5 bước trời thần kia thì bắt đầu pull về local không thôi máy lại báo "reject" ngày nọ. Nếu bị reject thì lỗi phổ biến là do bạn chưa commit quần què gì:

## 7. git push origin van-dep-trai

Đây là lúc bạn tận hưởng sau khi lằng nhằn 6 bước kia, push lên cloud rõ là gitlab:

## 8. git branch 

Thói quen check lại cho chắc, cá 300% là vẫn đang ở branch mới tạo (van-dep-trai)


## 9. git checkout master

Chuyển qua branch master để merge branch (mục đích cuối cùng là vậy)

## 10. git pull origin master

Muốn push thì phải pull, nguyên tắc khai thiên mẹ rồi:


## 11. git checkout van-dep-trai

Nhiều bạn thắc mắc sao không ở branch master mà lại nhảy về branch về mới tạo (van-dep-trai), duy chỉ là do bạn muốn merge branch mới tạo với master thôi:


## 12. git merge master

Bây giờ mới merge được nè, merge xong nếu xui thì bị conflict nhiều là do thằng project management phân tích không kỹ chức năng, nên chia model bị dính thằng này với thằng kia, còn nếu hên thì không cần sửa gì. Trường hợp xui là cả vựa conflicts thì chỉ có việc fix từng thằng, fix hết mới "add ." vào branch được, thường thì có 4 options cho mình chọn, conflict nào mới hoàn toàn nên chọn option của master, confict nào giữa bạn với master thì thấy cái nào hợp lý thì chọn, lưu ý ko chọn option 3, 4, vì những thứ choose alls bạn nên bỏ qua:


## 13. npm run watch

Check coi còn lỗi không, nhiều khi làm từ sáng tới khuya lú quá nên check chay hết được, này thì mình lười nên run nó vì nó có path tới chỗ confict, nhấn "Alt + chuột trái". Lưu ý mỗi project tùy thằng khởi tạo nó viết scripts run project nên nhớ để ý đó là lệnh gì !:


## 14. git add . and git commit -m "improvement: resolve conflict"

Nếu có conflict và resolve it thì run 2 lệnh mẫu ở dưới, ko thì skip:


## 15. git push origin van-dep-trai

End to sleep, 11h đêm rồi, làm xong 13 steps kia thì push được rồi, nếu ok sẽ hiện ra link cho bạn để send a request tới thằng master cầu xin nó add branch vào hay là "Everything up-to-date", nếu không ok thì bạn đọc lỗi đi chứ mình chưa gặp bao giờ. 


---
**Author:** *@heeyee* :+1:
**Time:** *6/7/2020 10:45*

