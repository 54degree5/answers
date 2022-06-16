import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      1. В каком разделе PROTECTION собраны настройки ограничения загрузки файлов на веб-порталы, передачи файлов через мессенджеры и отправки вложений по электронной почте? <br></br>
-Правила DLP  <br></br>
2. Каков результат успешного пилота Safetica для компании? <br></br>
-сформированный файл с анализом безопасности компании. <br></br>
3.Как удаленно перезапустить службу Safetica Client? <br></br>
-Через контекстное меню консоли Safetica <br></br>
4. Сколько времени обычно занимает этап анализа на пилотном проекте? <br></br>
-1 неделя <br></br>
5.Какой продукт осуществляет только сбор информации с персональных компьютеров пользователей, например об используемых сотрудником приложениях и посещенных сайтах? <br></br>
-DISCOVERY <br></br>
6.Какой минимальный уровень интеграции необходим для мониторинга сетевых действий функционалу PROTECTION? <br></br>
- Совместимость <br></br>
7.Как отобразить процессы Safetica на ПК пользователя, если включен режим скрытия процессов Safetica? <br></br>
-С помощью специальных приложения (Process Hacker и т. д.) <br></br>
8.Какой модуль позволяет ограничить запуск определенных приложений на рабочей станции? <br></br>
-Supervisor <br></br>
9.Что необходимо сделать, перед тем, как собирать журналы с ПК пользователя для отправки в техническую поддержку? <br></br>
-включить введение журналов отладки <br></br>
10.Выберите типы политик DLP, которые доступны для использования в Safetica <br></br>
-Общая политика <br></br>
-Категория приложений <br></br>
-Политика данных <br></br>
11.Какой инструмент может использоваться в различных функциях Safetica для лучшей ориентации в записанных данных и настройки различных политик безопасности? <br></br>
-Категории <br></br>
12.Какая категория предупреждений используется для отправки накопленной за регулярный интервал времени информации о событиях на клиентах? <br></br>
-Информационные предупреждения <br></br>
13.Архитектура: укажите все компоненты Safetica, которые устанавливаются на рабочих станциях сотрудников для дальнейшего сбора информации и работы системы предотвращения утечек: <br></br>
-Safetica Endpoint Client <br></br>
-Safetica Agent <br></br>
14.Какие базы данных поддерживаются? <br></br>
-MS SQL Server <br></br>
15.В каком разделе можно изменять состояние работы различных функций Safetica Client? <br></br>
-Деактивация Клиента <br></br>
16.Может ли пользователь остановить или удалить клиент Safetica Endpoint Client? <br></br>
-Да, но только если он знает как. Кроме того, требуется пароль <br></br>
17.Какой компонент должен быть развернут на ПК пользователя первым? <br></br>
-Safetica Agent <br></br>
18.Что означает аббревиатура DLP? <br></br>
-Предотвращение утечек информации <br></br>
19.Какие функции используются на пилотном проекте? <br></br>
-Приложения, Устройства, Веб-сайты, Печать, Сетевой траффик, Почта, Файлы. <br></br>
20.Менеджер хочет посмотреть, какие сайты посещают пользователи и какие приложения они активно используют. Выберите компоненты, которые позволят получить эту информацию? <br></br>
-WebSafetica <br></br>
-Консоль Safetica
    </div>
  )
}
