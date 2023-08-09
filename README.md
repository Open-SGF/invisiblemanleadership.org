# The Invisible Man Website

## Prequisites
- [Docker](https://www.docker.com/)

## Designs
- [Wireframes](https://www.figma.com/file/n2lMhnZNeKAAKaNnOCo0mX/Invisible-Man-Wireframes?node-id=0%3A1)

## Setup
- Copy `.env.example` to `.env`
- Run `docker compose up -d web`
    - This will spin up the `web` container from `docker-compose.yaml` and it's dependent containers (`mysql` and `redis`).
    - It's possible that the `mysql` container's exposed port will conflict with an existing mysql instance on your host. If that's the case set the env variable `FORWARDED_DB_PORT` to expose a different port on the `mysql` container
- After the containers are running there are a few commands we'll need to execute inside the `web` container from our `docker-compose.yaml`. There are a few ways to do this
    - You can shell into the container using `docker compose exec web sh`. This will leave you with a prompt in the `web` container that you can use to run each command.
        Note: you'll have to manually exit this shell when you're finished by running the `exit` command
    - Or, you can prefix each command with `docker compose exec web`. This will execute the command in the `web` container and exit when finished.
        - You'll likely be using this prefix a lot, you might want to alias it to something like `dew`
- Run the following commands in the `web` container
    - `composer install`
    - `npm install`
    - `npm run prepare`
    - `php craft install`
        - This command will prompt you for several values. Go with the default for all of these except the admin credentials (username, email, and password none of which have a default)
            - Note: The admin credentials will only be used on your local machine. They don't need to be unique or very secure.
    - `php craft migrate/all`
    - `php craft project-config/apply`
    - `exit` to exit web container
- Run `docker compose up -d` to spin up the rest of the containers
- Start local development server for processing frontend assets
    - You'll have to execute the following command in the container using the strategies from above
    - `npm run dev`
    - This command will take over that terminal. Press CTRL + C to cancel when you're done

- Open `http://localhost:8080` in your browser to see the website

## Applying Craft Changes
- When other people have made changes to the contents or structure of the CMS, you will have
to apply these changes to your local database. You can do this by executing the
following commands in your web container (enter your web container using the method detailed above):
  - `composer install`
  - `php craft migrate/all`
  - `php craft project-config/apply`

## Shutting down the project
- Cancel any terminal running `npm run dev`
- Stop the docker containers `docker compose stop`

## Troubleshooting
- Permission denied error when running `composer install`
    - If your host machine is linux it's possible that the user in the docker containers is different than the one on your host machine. You can add the env variables `WWWGROUP` and `WWWUSER` to `.env`. You'll need to set these values to be your host systems user id and group id. You can get these values with the `id` command. Make sure to rebuild your containers with `docker compose build --no-cache` afterwards.


## Starting and stopping Container
- Make sure your in the repo ``cd invisiblemanleadership.org``
- Starting the container ``docker-compose start``
- Stopping the container ``docker-compose stop``
