pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Source code is already checked out by Jenkins'
            }
        }

        stage('Validate') {
            steps {
                sh 'ls -la'
                sh 'ls -la app'
            }
        }

        stage('Test') {
            steps {
                sh 'chmod +x tests/test.sh'
                sh './tests/test.sh'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t jenkins-cicd-demo:latest .'
            }
        }

        stage('Docker Test') {
            steps {
                sh 'docker images'
            }
        }
    }

    post {

        success {
            echo 'CI Pipeline completed successfully!'
        }

        failure {
            echo 'CI Pipeline failed!'
        }
    }
}
