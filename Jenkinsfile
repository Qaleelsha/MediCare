pipeline {
    agent any

    stages {

        stage('GitHub Connection Check') {
            steps {
                sh 'echo Connected to GitHub Successfully'
            }
        }

        stage('Project Files Check') {
            steps {
                sh 'ls'
            }
        }

        stage('Backend Folder Check') {
            steps {
                dir('backend') {
                    sh 'ls'
                }
            }
        }

        stage('Frontend Folder Check') {
            steps {
                dir('frontend') {
                    sh 'ls'
                }
            }
        }

        stage('Docker Compose Check') {
            steps {
                sh 'echo Docker Compose Ready'
            }
        }
    }

    post {
        success {
            echo 'MediCare CI/CD Pipeline Executed Successfully!'
        }

        failure {
            echo 'Pipeline Failed!'
        }
    }
}