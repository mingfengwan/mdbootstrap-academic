pipeline {
    agent {
        docker {
            image 'node:23'
            args '-u root:root'
            reuseNode true
        }
    }
    stages {
        stage('Tests') {
            steps {
                echo 'Doing nothing...'
            }
        }
    }
}