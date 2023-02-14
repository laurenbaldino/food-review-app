from database import db
import sqlalchemy
# from sqlalchemy.orm import DeclarativeBase

class Reviews(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    business_name = db.Column(db.String)
    description = db.Column(db.String)
    image_link = db.Column(db.String)
    rating = db.Column(db.Integer)