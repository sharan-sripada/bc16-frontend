import groovy.transform.Field

podTemplate(containers: [
	containerTemplate(name: 'docker', image: 'docker:19.03', command: 'cat', ttyEnabled: true)],
	volumes: [hostPathVolume(mountPath: '/var/run/docker.sock', hostPath: '/var/run/docker.sock')]
) 
{
    node(POD_LABEL){


        environment {
       
        DOCKERHUB_CREDENTIALS= credentials('dockerhub_token_sss')
        
    }
    
    stage('Checkout Source') {
     
        git 'https://github.com/sharan-sripada/bc16-frontend.git'
      
    }
	    
	    stage('Build Docker'){
         
          
            container('docker'){

            sh "docker build -t sharansripada/fe_jenkins:latest ."
            sh "docker tag sharansripada/fe_jenkins:latest sharansripada/fe_jenkins:${BUILD_NUMBER}"

            sh 'docker images'
            
        }
	    }
	    
	    stage('Push Docker'){
	        
	            container('docker'){
	            
	            
	            
	            withCredentials([usernamePassword(credentialsId: 'dockerhub_token_sss', usernameVariable: 'username', passwordVariable: 'password')]) {
  sh 'echo $PASSWORD'
               sh 'docker login -u $username -p $password'
  echo USERNAME

  echo "username is $USERNAME"

	            //sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
	            sh "docker push sharansripada/fe_jenkins:${BUILD_NUMBER}"
                sh "docker push sharansripada/fe_jenkins:latest"
	            }
	           
	        
	        }
	    }

         stage ('Invoking helm build') {
        	
		    build job: 'helm-bc16', parameters: [string(name: 'fe_version', value: BUILD_NUMBER)]
	    }








    
    }

}
