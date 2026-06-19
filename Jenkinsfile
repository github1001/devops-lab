pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code...'
            }
        }

        stage('Deploy Dev') {
            steps {
                sh '''
		    docker rm -f sample-app-dev || true
                    docker compose version     
                    docker compose -f docker-compose.dev.yml up -d --build
		    docker ps
                '''
            }
        }
    }
}
