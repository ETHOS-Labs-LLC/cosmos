# Make managed in .env-build
ARG OPENC3_DEPENDENCY_REGISTRY=docker.io
ARG ALPINE_BUILD=7
ARG ALPINE_VERSION=3.18

# Should be loaded from ARG
FROM ${OPENC3_DEPENDENCY_REGISTRY}/alpine:${ALPINE_VERSION}.${ALPINE_BUILD}

# An ARG declared before a FROM is outside of a build stage, so it can’t be
# used in any instruction after a FROM. So we need to re-ARG ALPINE_VERSION

ARG ALPINE_VERSION=7
ARG APK_URL=https://dl-cdn.alpinelinux.org
ARG RUBYGEMS_URL=https://rubygems.org
ARG PYPI_URL=https://pypi.org

ENV ALPINE_VERSION=${ALPINE_VERSION}
ENV APK_URL=https://dl-cdn.alpinelinux.org
ENV RUBYGEMS_URL=https://rubygems.org
ENV PYPI_URL=${PYPI_URL}

# NOTE: This must match the alpine image used above in FROM
RUN echo "https://dl-cdn.alpinelinux.org/alpine/v3.18/main" > /etc/apk/repositories \
  && echo "https://dl-cdn.alpinelinux.org/alpine/v3.18/community" >> /etc/apk/repositories

LABEL maintainer="support@openc3.com"

# We require a local certificate file so set that up.
# You must place a valid cacert.pem file in your OpenC3 development folder for this work
# Comment out these lines if this is not required in your environment
COPY cacert.pem /devel/cacert.pem
ENV SSL_CERT_FILE=/devel/cacert.pem
ENV CURL_CA_BUNDLE=/devel/cacert.pem
ENV REQUESTS_CA_BUNDLE=/devel/cacert.pem
ENV NODE_EXTRA_CA_CERTS=/devel/cacert.pem

ENV NOKOGIRI_USE_SYSTEM_LIBRARIES=1

ADD .gemrc /root/.gemrc
RUN sed -i "s|RUBYGEMS_URL|${RUBYGEMS_URL}|g" /root/.gemrc
RUN cp /root/.gemrc /etc/gemrc
ENV GEMRC=/etc/gemrc

RUN apk update \
  && apk upgrade \
  && apk add --no-cache ruby \
  build-base \
  ruby-dev \
  openblas-dev \
  openssl \
  openssl-dev \
  ruby-etc \
  ruby-bigdecimal \
  ruby-io-console \
  ruby-irb \
  rbspy \
  python3 \
  python3-dev \
  py3-pip \
  ca-certificates \
  curl \
  libc6-compat \
  less \
  tini \
  git \
  htop \
  libxml2-dev \
  libxslt-dev \
  # Ruby 3.2 no longer bundles libyaml, libffi so explicitly include them
  yaml-dev \
  libffi-dev \
  && gem update --system 3.3.14 \
  && gem install rake \
  && gem cleanup \
  && bundle config build.nokogiri --use-system-libraries \
  && bundle config git.allow_insecure true \
  && pip3 config --global set global.index $PYPI_URL/pypi \
  && pip3 config --global set global.index-url $PYPI_URL/simple

# Set user and group
ENV IMAGE_USER=openc3
ENV IMAGE_GROUP=openc3
ENV USER_ID=1001
ENV GROUP_ID=1001
RUN addgroup -g ${GROUP_ID} -S ${IMAGE_GROUP}
RUN adduser -u ${USER_ID} -G ${IMAGE_GROUP} -s /bin/ash -S ${IMAGE_USER}

# Switch to user
USER ${USER_ID}:${GROUP_ID}

ENTRYPOINT [ "/sbin/tini", "--" ]
