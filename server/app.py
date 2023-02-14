from flask import Flask, request
from database import db
from sqlalchemy import create_engine
import csv
from Models.User import User
from Models.Reviews import Reviews

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://localhost/yelp-clone'
db.init_app(app)






with app.app_context():
    db.create_all()


@app.route('/users')
def users_list():
    users = db.session.execute(db.select(User)).all()
    print(users)
    return

@app.route('/users/create', methods=['GET','POST'])
def user_create():
    json = request.get_json()
    if request.method == 'POST':
        user = User(
            username = json['username'],
            password = json['password'],
        )
        db.session.add(user)
        db.session.commit()
        return "user created"

# @app.route('/users/update', methods=['GET', 'POST'])
# def user_edit_password():
#     if request.method == 'POST':
#         stmt = update(User).where(User.password.id == id).values(password= 'new_password')
#         user = db.session.execute(db.select(User))
#         db.session.update(user)
#         db.session.commit()


@app.route("/user/<int:id>/delete", methods=["GET", "POST"])
def user_delete(id):
    user = db.get_or_404(User, id)
    if request.method == "POST":
        db.session.delete(user)
        db.session.commit()

@app.route('/reviews/create', methods=['GET','POST'])
def review_create():
    json = request.get_json()
    if request.method == 'POST':
        review = Reviews(
            business_name = json['business_name'],
            description = json['decription'],
            image_link = json['image_link'],
            rating = json['rating'],
        )
        db.session.add(review)
        db.session.commit()
        return "review created"

@app.route("/reviews/<int:id>/delete", methods=["GET", "POST"])
def reviews_delete(id):
    user = db.get_or_404(Reviews, id)
    if request.method == "POST":
        db.session.delete(review)
        db.session.commit()


if __name__ == '__main__':
    app.run('127.0.0.1', 2020, debug=True)