from faker import Faker
from sqlalchemy import create_engine
from Models.User import User
from Models.Reviews import Reviews
import random
from sqlalchemy.orm import Session

engine = create_engine('postgresql://localhost/yelp-clone')
fake = Faker()

with Session(engine) as session:
    review = Reviews(business_name=fake.name(), description=fake.text(), image_link='https://loremflickr.com/320/240/food', rating=random.randrange(6))
    session.add(review)
    session.commit()

