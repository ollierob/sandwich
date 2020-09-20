import * as React from "react";
import "./TopMenu.css";
import {Menu} from "antd";
import {SelectOutlined, VerticalAlignBottomOutlined} from "@ant-design/icons";

type Props = {
    open: "deploy" | "manage"
}

export default class TopMenu extends React.PureComponent<Props> {

    render() {
        return <Menu mode="horizontal" selectedKeys={[this.props.open]}>
            <Menu.Item key="deploy" icon={<VerticalAlignBottomOutlined/>}>
                <a href="/deploy/">Deploy</a>
            </Menu.Item>
            <Menu.Item key="manage" icon={<SelectOutlined/>}>
                <a href="/manage/">Manage</a>
            </Menu.Item>
        </Menu>;
    }

}