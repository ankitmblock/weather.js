IMAGE_NAME=weather-lib
CONTAINER_NAME=weather-lib

build-image:
	docker build . -t ${IMAGE_NAME}

run-image:
	docker run --name ${CONTAINER_NAME} ${IMAGE_NAME}

remove-container:
	docker rm ${CONTAINER_NAME}

up:	build-image run-image remove-container
