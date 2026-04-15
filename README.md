# Smart University Management System (SUMS) - Complete Project

## 📋 Project Overview

A complete student-teacher management system with attendance tracking using QR codes.

**Technology Stack:**
- Frontend: HTML, CSS, JavaScript
- Backend: Supabase (PostgreSQL + Auth)
- QR Scanning: html5-qrcode library
- QR Generation: qrcode.js library

---

## 📁 Files Included

### 1. **config.js** - Supabase Configuration
```javascript
// Supabase project credentials
SUPABASE_URL = "https://ksveycefupqilivetows.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

### 2. **styles.css** - Unified Styling
- Responsive design for all pages
- Modern gradient backgrounds
- Card-based layouts
- Minimal but professional UI

### 3. **index.html** - Login Page
**Features:**
- Email/password login
- Student/Teacher role selection
- Registration links for both roles
- Profile verification from database

**Flow:**
1. User enters credentials
2. Supabase auth validates
3. Profile fetched from `profiles` table
4. Role verification (student/teacher)
5. Redirect to respective dashboard

### 4. **form.html** - Student Registration
**Fields:**
- Full Name
- Roll Number (unique)
- Email ID (unique)
- Password (min 7 chars)
- Course Name
- Section ID (dropdown)

**Process:**
1. Create auth account
2. Wait 1.5 seconds (Supabase sync)
3. Insert profile record
4. Redirect to login

### 5. **teacher_form.html** - Teacher Registration
**Fields:**
- Full Name
- Employee ID (unique)
- Official Email (unique)
- Password (min 7 chars)
- Designation (dropdown)

**Process:**
1. Create auth account
2. Wait 1.5 seconds
3. Insert profile record
4. Redirect to login

### 6. **Students.html** - Student Dashboard
**Sections:**
- 📊 **Dashboard** - Overview cards (attendance, subjects, notices, next class)
- 📅 **Timetable** - Subject schedule for their section
- 📷 **Mark Attendance** - QR scanner to mark attendance
- 📢 **Notices** - Latest notices from university

**Features:**
- Real-time timetable loading from database
- Live QR scanning using device camera
- Attendance marking in `attendance` table
- Dynamic notice display
- Logout functionality

### 7. **teacher.html** - Teacher Dashboard
**Sections:**
- 📊 **Dashboard** - Overview (subjects, students, classes today, attendance)
- 📅 **Timetable** - Subjects/classes they teach
- 📷 **Take Attendance** - QR code generator
- 👨‍🎓 **Students** - List of students who marked attendance
- 📢 **Notices** - Latest notices

**Features:**
- QR code refreshes every 2 seconds
- Token expires in 8 seconds
- Displays students who scanned attendance
- Real-time attendance list
- Can start/stop attendance session

---

## 🔄 Attendance Flow

### Teacher Side:
1. Login to teacher dashboard
2. Go to "Take Attendance" section
3. Click "Start Attendance Session"
4. QR code generates every 2 seconds
5. Show QR code to students
6. View list of students who scanned

### Student Side:
1. Login to student dashboard
2. Go to "Mark Attendance" section
3. Click "Start Scanner"
4. Open camera and scan teacher's QR
5. Attendance automatically marked
6. Get confirmation message

### Database:
- **attendance_sessions table**: Stores QR tokens with 8-second expiry
- **attendance table**: Records which student scanned which session
- Records: student_id, session_id, scanned_at timestamp

---

## 📊 Database Schema

### profiles
- id (UUID, FK to auth.users)
- email (unique)
- full_name
- role (student/teacher)
- roll_number (students only, unique)
- employee_id (teachers only, unique)
- course_name, section_id (students)
- designation (teachers)

### attendance_sessions
- id (UUID)
- otp_token (6-char random)
- expires_at (8 seconds)
- is_active (boolean)

### attendance
- id (serial)
- student_id (FK to profiles)
- session_id (FK to attendance_sessions)
- scanned_at (timestamp)

### timetable
- id (serial)
- section_id (FK to sections)
- subject_id (FK to subjects)
- teacher_id (FK to profiles)
- day_of_week
- start_time
- end_time
- room_number

### subjects, sections, universities, schools, departments
(Already populated with sample data)

---

## 🚀 Getting Started

### Setup Instructions:

1. **Download all files:**
   - config.js
   - styles.css
   - index.html
   - form.html
   - teacher_form.html
   - Students.html
   - teacher.html

2. **Create a folder** (e.g., "SUMS")

3. **Place all files** in the same folder

4. **Open index.html** in your browser

### Test Accounts:

#### Student:
- Email: student@krmu.edu.in
- Password: Student@123 (create your own in form.html)

#### Teacher:
- Email: teacher@krmu.edu.in
- Password: Teacher@123 (create your own in teacher_form.html)

---

## ✅ Testing Checklist

- [ ] Student registration works
- [ ] Teacher registration works
- [ ] Login with correct role verification
- [ ] Student dashboard shows timetable
- [ ] Teacher dashboard shows timetable
- [ ] QR generation works (refreshes every 2 seconds)
- [ ] QR scanner opens on student dashboard
- [ ] Attendance marking works
- [ ] Attendance list updates in real-time
- [ ] Logout works on both dashboards
- [ ] Error handling for invalid credentials
- [ ] Error handling for expired QR codes

---

## 🐛 Troubleshooting

### Login Says "Profile Not Found"
- Make sure you registered first
- Check that the registration completed successfully
- Verify profile exists in Supabase profiles table

### QR Scanner Doesn't Open
- Allow camera permissions in browser
- Check browser console (F12) for errors
- Make sure you clicked "Start Scanner"

### QR Code Not Generating
- Check teacher dashboard "Take Attendance" section
- Click "Start Attendance Session"
- Check browser console for errors

### Attendance Not Marking
- Ensure QR session is active (generated less than 8 seconds ago)
- Check student is logged in
- Verify scanner successfully captured QR

---

## 📱 Responsive Design

All pages are mobile-friendly:
- Sidebar collapses on mobile
- Cards stack vertically
- Forms take full width
- Touch-friendly buttons

---

## 🔐 Security Notes

- Passwords minimum 7 characters
- Email must be unique per role
- Roll Number/Employee ID must be unique
- RLS policies recommended (optional)
- All auth handled by Supabase

---

## 🎯 Key Features Implemented

✅ Student & Teacher Registration
✅ Role-based Login
✅ Timetable Display
✅ Real-time QR Generation
✅ QR Scanning for Attendance
✅ Attendance Tracking
✅ Dynamic Notices
✅ Responsive Dashboard
✅ Session Management
✅ Error Handling

---

## 💡 Future Enhancements

- [ ] Marks management
- [ ] Internal/External assessments
- [ ] Detailed attendance reports
- [ ] Bulk student upload
- [ ] Email notifications
- [ ] Mobile app
- [ ] Analytics dashboard
- [ ] Two-factor authentication

---

## 📞 Support

For issues or questions:
1. Check browser console (F12) for errors
2. Verify all files are in the same folder
3. Ensure Supabase credentials in config.js are correct
4. Check network connection
5. Clear browser cache and refresh

---

**Happy Teaching & Learning! 🎓**
