pipeline {
   
   agent any

    parameters {
        string(name: 'SPEC', defaultValue: 'cypress/e2e/**/**', description: 'Ej: cypress/e2e/Test/*.cy.js')
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: 'Seleccione el Navegador de ejecucion')
    }
    
   options {
        ansiColor('xterm')
    }

 stages {
        
        stage('Build'){
           steps {
                echo "Building the application"
            }
        }
        
        stage('Testing') {
            steps {
                bat "npm install cypress --save-dev"
                bat "npm i --save-dev cypress-mochawesome-reporter"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        
        stage('Deploy'){
            steps {
                echo "Deploying Pipeline"
            }
        }
    }


    post {
        always {
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/reports/html', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
            deleteDir()
        }
    }
}