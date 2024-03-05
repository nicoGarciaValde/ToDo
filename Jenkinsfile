pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Construcción y minimización') {
            steps {
                sh 'npm run build'
            }
        }
    }

    post {
        always {
            // Limpieza, notificaciones, etc.
        }
    }
}