FROM node:14.15.0

WORKDIR /app

COPY . .

# npmのグローバルインストール
RUN npm install -g npm

# package-lock.jsonからdependをインストール
# RUN npm ci

EXPOSE 3000

CMD ["/bin/sh"]