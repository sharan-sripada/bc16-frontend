pipeline{
	
	agent{
			
			kubernetes {
			   

                containers: [   
    containerTemplate(name: 'docker', image: 'docker:19.03', args: '-v /var/run/docker.sock:/var/run/docker.sock',tty: 'true'),
                ]
                //,volumes: [hostPathVolume(mountPath: '/var/run/docker.sock', hostPath: '/var/run/docker.sock')]
                
		// 	    yaml '''
        // apiVersion: v1
        // kind: Pod
        // spec:
        //   containers:
        //   - name: docker
        //     image: docker:19.03
        //     command:
        //     - cat
        //     tty: true
        //     volumeMounts:
        //     - name: dockersock
        //       mountPath: /var/run/docker.sock
        //   volumes:
        //     - name: dockersock
        //       hostPath:
        //         path: /var/run/docker.sock
        // '''
        }
	}
	
		
    environment {
        VERSION = "${env.GIT_COMMIT}"
        DOCKERHUB_CREDENTIALS= credentials('dockerhub_token_sss')
        MY_KUBECONFIG = credentials('config-file')
    }
	stages{
	    stage('Checkout Source') {
      steps {
        git 'https://github.com/sharan-sripada/bc16-frontend.git'
      }
    }
	    
	    stage('Build Docker'){
         
           steps{
            container('docker'){

            sh 'docker build -t sharansripada/fe_jenkins:${VERSION} .'
            sh 'docker images'
            
        }}
	    }
	    
	    stage('Push Docker'){
	        steps{
	            container('docker'){
	            sh 'ls'
	            
	            
	            withCredentials([usernamePassword(credentialsId: 'dockerhub_token_sss', usernameVariable: 'username', passwordVariable: 'password')]) {
  sh 'echo $PASSWORD'
               sh 'docker login -u $username -p $password'
  echo USERNAME

  echo "username is $USERNAME"

	            //sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
	            sh 'docker push sharansripada/fe_jenkins:${VERSION}'
	            }
	           
	        }
	        }
	    }
               
                    
				
	}    
	post{
	    always{
	        container('docker'){
	         sh 'docker logout'
	    }}
	}

}