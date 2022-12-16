import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['trusty-alpaca-9257-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'dHJ1c3R5LWFscGFjYS05MjU3JPoPxkhsZRyvT9qJXLkI9c0iCYZxE6o4wVJ12e8',
          password:
            'lSdrVEn8FbbtJPTAyyW0i5vHEr8kP8_OyzJtijImDXhfpl9q-fGe5IsQAOSNcvk4bAxtHQ==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
