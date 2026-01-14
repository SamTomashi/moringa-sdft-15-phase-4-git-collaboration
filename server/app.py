from flask_restful import Api, Resource
from flask import Flask, make_response, request, jsonify
from flask_migrate import Migrate #Alembic: to run migrations
from sqlalchemy import func
from models import db, Mentor, Cohort, Student
from flask_cors import CORS





app = Flask(__name__) 

CORS(app, resources={
    r"/*": {
        "origins": [
            "http://localhost:3001"
        ]
    }
})



app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///moringa.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

migrate = Migrate(app, db)

api = Api(app)

# CORS(app)

# CORS(app) # Allow all origins
# Allow only certain origins (e.g., local React app and production domain)


"""
Git Collaboaration guide:
0. The team create the inital repository/folder/project structure
1. Clone the main repository
2. Create and navigate to branch base on the feature you are working on: e.g. ft-authentication, ft-models
3. Commit regularly
4. Once you are done, don't push to the main branch, but raise a pull request
5. git push origin ft-authentication
6. Raise a pull request
7. once the team approves your code, they merge it(your branch code) to the dev branch
8. You need to pull from the remote main barnch to your local main branch
"""

"""
Tasks:
1. Update migration: adding email and password to the mentor's table: Grace
2. Create the registration endpoint and logic: Verah
3. Create the login endpoint and logic: Dan
4. Allow users to login from the front-end: Sam
"""


class Mentors(Resource):


    def get(self):
        response_dict_list = [n.to_dict() for n in Mentor.query.all()]
        return make_response(response_dict_list, 200)

    def post(self):
        data  = request.get_json()
        mentor = Mentor(name=data['name'], email=data['email'], password=data['password'])
        db.session.add_all([mentor])
        db.session.commit()

        return make_response(mentor.to_dict(), 200)

api.add_resource(Mentors, '/mentors')

class MentorsById(Resource):

    def get(self, id):
        mentor = Mentor.query.filter_by(id=id).first()

        return make_response(mentor.to_dict(), 200)

    def patch(self, id):
        pass

    def delete(self, id):
        mentor = Mentor.query.filter_by(id=id).first()
        db.session.delete(mentor)
        db.session.commit()

        return make_response("mentor deleted successfully", 200)

api.add_resource(MentorsById, '/mentors/<int:id>')


class Login(Resource):

    def post(self):
        data  = request.get_json()
        user = Mentor.query.filter(Mentor.email==data["email"], Mentor.password==data["password"]).first()
        if user: 
            return make_response("login successfully", 200)
        
        return make_response("Wrong credentials", 401)
        
api.add_resource(Login, '/login')





if __name__ == '__main__':
    app.run(port=5555, debug=True)
