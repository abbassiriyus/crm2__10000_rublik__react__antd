import React from 'react'

export default function Comments() {
  const comments = [
    {
      text: "Отличный проект! Очень понравилось.",
      author: "Иван",
      timestamp: "2024-07-15T10:30:00Z"
    },
    {
      text: "Хорошо сделано, буду следить за обновлениями.",
      author: "Анна",
      timestamp: "2024-07-15T11:00:00Z"
    },
    {
      text: "Интересная идея, жду выхода.",
      author: "Сергей",
      timestamp: "2024-07-15T11:15:00Z"
    },
    {
      text: "Замечательная работа! Спасибо за труд.",
      author: "Ольга",
      timestamp: "2024-07-15T12:00:00Z"
    },
    {
      text: "Классно, продолжайте в том же духе.",
      author: "Дмитрий",
      timestamp: "2024-07-15T12:30:00Z"
    }
  ];

  const formatDate = (dateString, getHour = true) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based in JavaScript
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return getHour ? `${day}.${month}.${year} ${hours}:${minutes}` : `${day}.${month}.${year}`;
  };


  return (
    <div className='form_box comment_Box'>
      <table>
        <thead>
          <tr>
            <th>Комментарий</th>
            <th>Кем создан или изменеыон</th>
            <th>Койгда создан или  изменеыон</th>
          </tr>
        </thead>
        <tbody>
          {
            comments.map((comment, index) => (
              <tr key={index}>
                <td>{comment.text}</td>
                <td>{comment.author}</td>
                <td>{formatDate(comment.timestamp)}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
