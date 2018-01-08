FROM rentpath/rp_node:8.9.1

WORKDIR $HOME/react-ui
COPY package.json yarn.lock $HOME/react-ui/
run chown -R node:node $HOME/react-ui

USER root
COPY . $HOME/react-ui/
RUN chown -R node:node $HOME/react-ui/
RUN apt-get install -y nginx

USER node
RUN yarn config set registry https://registry.yarnpkg.com
RUN yarn install
RUN yarn lint
RUN yarn test

RUN yarn run build-storybook

USER root
RUN cp -R storybook-static/* /var/www/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
