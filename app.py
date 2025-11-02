from flask import Flask, render_template, request, redirect, flash
import sqlite3

app = Flask(__name__)

app.secret_key = 'your_secret_key'  

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

        conn = sqlite3.connect('retro.db')
        c = conn.cursor()
        c.execute("INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)",
        (name, email, message))

        conn.commit()
        conn.close()

        flash('Message sent successfully!')
        return redirect('/contact')

    return render_template('contact.html')
if __name__ == '__main__':
    app.run(debug=True) 