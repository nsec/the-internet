hostname {{ container.name }}
password {{ config_get("user.internet.router.password.login", "login") }}
enable password {{ config_get("user.internet.router.password.enable", "enable") }}
