pipeline {

    agent any

    stages {

        stage("build") {

            steps {

              sh 'sudo rm -r /var/www/SurveyApp'

              sh 'sudo mkdir /var/www/SurveyApp'

              sh 'sudo mv /var/jenkins_home/workspace/SurveyApp_master/* /var/www/SurveyApp'

              sh 'cd /var/www/SurveyApp'

              sh 'sudo npm install'

              sh 'cd client'

              sh 'sudo npm install'

              sh 'sudo npm run build'

              sh 'cd ..'

              sh 'pm2 start server.js'

              sh 'sudo service nginx stop && sudo service nginx start'
            }
        }

        stage("testing") {

            steps {
                echo 'testing the application'
            }
        }

        stage("deploying") {

            steps {
                echo 'deploying the application'
            }
        }
        
    }
}
