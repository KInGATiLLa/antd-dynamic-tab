# Antd-dynamic-tab

React болон Ant design UI санг ашиглаж хийгдсэн динамикаар үүсгэж болох компонент сан юм.

## Хөгжүүлэлт хийх (development)

`npm start` командаар хөгжүүлэлтийн орчинд ажиллуулна.

## Бүтээгдэхүүн болгон гаргах (production)

`npm run build` командаар сангаа бүтээгдэхүүн болгон гаргана.

## Хэрхэн ашиглах вэ?

```js

<DynamicTab
  config={{
    size: 'large',
    defaultActiveKey: '2',
  }}
  tabs={[
    {key: '1', tab: 'Tab 1', icon: VideoCameraOutlined, content: <Divider orientation="center">Tab 1</Divider>},
    {key: '2', tab: 'Tab 2', icon: UploadOutlined, content: <Divider orientation="center">Tab 2</Divider>},
  ]}
/>

```

Бүтээгдэхүүн болгон гаргахад хэрэглэгдэж байгаа сангийн дэлгэрэнгүй мэдээллийг эндээс үзнэ үү! <a href="https://esbuild.github.io/" target="_blank">Esbuild</a>
