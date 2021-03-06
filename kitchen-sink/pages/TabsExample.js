import React from 'react';
import {
  Container,
  Tabs,
  Card,
  Button,
} from 'amazeui-touch';

const albums = [
  {
    title: '女爵',
    desc: `
      她坦白了我们所虚伪的 她单纯了我们所复杂的
      五年以来…
      5年的等待，是个漫长也是耗损的过程。
      看尽乐坛芭比娃娃的甜美面具，「性格」这两个字，似乎快要消失！
      她的声音，她的个性，象徵著无可取代的高傲、独特的姿态，
      这样一股充满灵魂的音乐、沉寂而刚苏醒的真声音，
      是我们唯一相信且期待杨乃文的理由。`
  },
  {
    title: '第一张精选',
    desc: `
        出道六年来只出过三张专辑的杨乃文，第一次集合三张专辑的精华构成了这张充满个性的精选辑。专辑收录尚未发片前首先曝光，原始浓烈的杨乃文独唱曲[爱上你只是我的错]、曾让无数人伤感落泪的《我给的爱》、悲情经典《silence》、杨乃文96年在魔岩校园live演唱会上敏感热烈的创作《fear》、充满古典优雅气质的电影[第凡内早餐]的主题曲《monn river》等好歌。通过尝试各种新鲜形象，搭配MV营造的氛围，总是给人耳目一新的新感觉。`
  },
  {
    title: 'Silence',
    desc: `所有人都能从作品中听到能量和震撼的呈现，矛盾与妥协，失意与快乐，制作人林炜哲是真正进入到歌手的灵魂，找出最真实的瞬间再燃烧释放，献给大家；这种完全认真作音乐不哈啦的态度，不是只字片语能形容，也并非速食文化所能比拟，这种精神是和全世界的音乐人同步，这也是他们的作品和台湾大部份截然不同的原因。这样的音乐正是台湾年轻人目前需要的，与世界处在同步潮流，所有年轻人都能感受的热情和力量`
  }
];

class TabsExample extends React.Component {
  state = {
    activeTab: 2,
  };

  handleAction = (key) => {
    this.setState({
      activeTab: key
    });
  };

  changeTab = (e) => {
    e.preventDefault();

    if (this.state.activeTab !== 1) {
      this.setState({
        activeTab: 1,
      });
    } else {
      console.warn('已经激活第二个 Tab 了!');
    }
  };

  render() {
    return (
      <Container {...this.props}>
        <h3>Default</h3>

        <Tabs
          activeKey={this.state.activeTab}
          onAction={this.handleAction}
        >
          {albums.map((ablum, i) => {
            return (
              <Tabs.Item
                title={ablum.title}
                key={i}
                navStyle={i === 1 ? 'alert' : i === 0 ? 'warning' : null}
              >
                {ablum.desc}
              </Tabs.Item>
            )
          })}
        </Tabs>
        <div className="padding">
          <Button
            amStyle="primary"
            amSize="sm"
            onClick={this.changeTab}
          >
            切换到第二个 Tab
          </Button>
        </div>

        <h3>Inset</h3>
        <Tabs inset>
          {albums.map((ablum, i) => {
            return (
              <Tabs.Item
                title={ablum.title}
                key={i}
              >
                {ablum.desc}
              </Tabs.Item>
            )
          })}
        </Tabs>

        <h3>In Card</h3>
        <Card>
          <Tabs>
            {albums.map((ablum, i) => {
              return (
                <Tabs.Item
                  title={ablum.title}
                  key={i}
                  disabled={i === 2}
                >
                  {ablum.desc}
                </Tabs.Item>
              )
            })}
          </Tabs>
        </Card>
      </Container>
    );
  }
}

export default TabsExample;
