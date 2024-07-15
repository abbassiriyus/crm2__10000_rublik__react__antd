import React from 'react'
import { Form, Input, Row, Col, Typography, Table } from 'antd';

export default function ContactUvedomlena() {

  const { Title } = Typography;

  return <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
    <Form layout="vertical">
      <Title level={4}>Direktor</Title>
      <Row gutter={16}>
        <Col span={6}>
          <Form.Item label="Ism">
            <Input defaultValue="Мис" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="Familiya">
            <Input defaultValue="Эв" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="Otasining ismi">
            <Input defaultValue="Лич" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="Tug'ilgan sanasi">
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Title level={4}>TT bilan aloqa</Title>
      <Row gutter={16}>
        <Col span={6}>
          <Form.Item label="Telefon">
            <Input defaultValue="8499" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="E-mail">
            <Input defaultValue="example@gmail.com" />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  </div>
}