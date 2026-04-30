pipeline {
    agent any

    environment {
        FAIL_BUILD = "false"
    }

    stages {

        stage('Clone') {
            steps {
                checkout scm
            }
        }

        stage('Install') {
            steps {
                bat 'npm install'
            }
        }

        stage('Code Quality (Lint)') {
            steps {
                bat 'npm run lint || exit 0'
            }
        }

        stage('SAST Scan (Static Code Analysis)') {
            steps {
                bat '''
                echo Running SAST Scan...
                npx eslint . || exit 0
                '''
            }
        }

        stage('SCA Dependency Scan') {
            steps {
                bat '''
                echo Checking vulnerable dependencies...
                npm audit --audit-level=high || exit 0
                '''
            }
        }

        stage('Secret Scan (Gitleaks)') {
            steps {
                bat '''
                echo Running Gitleaks...
                gitleaks detect --source=. --no-git -v || exit 0
                '''
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }
    }

    post {
        always {
            echo 'Security pipeline completed'
        }
    }
}
