### установка докер
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER

### сборка
sudo docker build -t my-nextjs-app .

### запуск контейнера
docker run -d \
  --name frontend \
  -p 3000:3000 \
  my-nextjs-app

### список образов
sudo docker images

# список контейнеров
sudo docker ps -a

# логи
sudo docker logs frontend

### закрытие сайта по паролю (site lock)
Сайт можно временно закрыть, чтобы доступ был только по паролю:

| Переменная          | Описание                                   |
|---------------------|--------------------------------------------|
| SITE_LOCK_ENABLED   | `1`/`true` — замок включён, иначе выключен |
| SITE_LOCK_PASSWORD  | Пароль доступа                             |

При включённом замке все страницы редиректят на `/lock`, API-запросы отвечают 403.
После ввода пароля браузер получает cookie на 30 дней.

docker run -d --name frontend -p 3000:3000 \
  -e SITE_LOCK_ENABLED=1 \
  -e SITE_LOCK_PASSWORD=secret \
  my-nextjs-app