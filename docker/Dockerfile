FROM debian:buster

RUN apt-get update \
	&& apt-get install -y aptitude \
	&& aptitude upgrade -y \
	&& aptitude install -y net-tools \
	&& aptitude install -y git vim 

# clean packages
RUN aptitude clean

# expose ssh port
# EXPOSE 22
