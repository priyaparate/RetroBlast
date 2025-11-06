from flask import Flask, render_template, request, redirect, flash, url_for
import sqlite3

app = Flask(__name__)
app.secret_key = 'retro_secret_key'

USER_DB = 'Retro-Blast.db'   # For signup, login, forgot-password
CONTACT_DB = 'retro.db'      # For contact page

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/games')
def games():
    return render_template('homepage.html')

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']

        conn = sqlite3.connect(CONTACT_DB)
        c = conn.cursor()
        c.execute("INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)",
                  (name, email, message))
        conn.commit()
        conn.close()

        flash('Message sent successfully!')
        return redirect('/contact')

    return render_template('contact.html')


@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        username = request.form['username'] 
        email = request.form['email'] 
        password = request.form['password'] 
        confirm_password = request.form['confirm_password']

        if password != confirm_password:
            flash("Passwords do not match!")
            return redirect('/signup')
        conn = sqlite3.connect(USER_DB)
        c = conn.cursor()
        c.execute("INSERT INTO Users(username, email, password,confirm_password) VALUES (?, ?, ?,?)",
                  (username, email, password,confirm_password))
        conn.commit()
        conn.close()

        flash("Registration successful!")
        return redirect('/login')

    return render_template('signup.html')

@app.route('/login', methods=['GET', 'POST'])
def login_page():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')

        conn = sqlite3.connect(USER_DB)
        c = conn.cursor()
        c.execute("SELECT * FROM Users WHERE username=? AND password=?", (username, password))
        user = c.fetchone()
        conn.close()

        if user:
            flash(f"Welcome back, {username}!")
            return redirect('/games')
        else:
            flash("Invalid username or password!")
            return redirect('/login')

    return render_template('login.html')

@app.route('/forgot-password', methods=['GET', 'POST'])
def forgot_password():
    message = ""
    if request.method == 'POST':
        email = request.form.get('email')

        conn = sqlite3.connect(USER_DB)
        c = conn.cursor()
        c.execute("SELECT * FROM Users WHERE email=?", (email,))
        user = c.fetchone()
        conn.close()

        if user:
            message = "A password reset link has been sent to your email."
        else:
            message = "No account found with that email."

    return render_template('forgot_password.html', message=message)

if __name__ == '__main__':
    app.run(debug=True)
